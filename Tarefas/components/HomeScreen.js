import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}
    from 'react-native';

function HomeScreen(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        const value = await AsyncStorage.getItem('@ToDoApp');
        if (value !== null) {
            setTasks(JSON.parse(value));
        }
    }

    async function finishTask(taskToFinish) {
        const newTasks = tasks.filter((task) => {
            return task !== taskToFinish;
        });
        setTasks(newTasks);
        await AsyncStorage.setItem('@ToDoApp', JSON.stringify(newTasks));
    }

    async function createTask(text) {
        const newTasks = [...tasks, text];
        setTasks(newTasks);
        await AsyncStorage.setItem('@ToDoApp', JSON.stringify(newTasks));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Minhas Tarefas</Text>

            {tasks.length === 0 && <Text style={styles.text}>Nenhuma tarefa</Text>}

            <View style={styles.tasks}>
                {tasks.map((task) => (
                    <View style={styles.task} key={task}>
                        <Text style={styles.taskText}>{task}</Text>
                    </View>
                ))}
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Tasks', { createTask })}>
                <Text>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        paddingTop: 40,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    tasks: {
        flex: 1,
        width: '90%',
        marginVertical: 20,
    },
    task: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 10,
        marginVertical: 8,
    },
    taskText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#66CDAA',
        alignSelf: 'flex-end',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

