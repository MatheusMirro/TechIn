import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';

function Tasks(props) {
    const [text, setText] = useState('');

    function createTask() {
        props.route.params.createTask(text);
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Adicionar nova tarefa</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.text}>Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Criar nova tarefa"
                    maxLength={100}
                    textAlignVertical="top"
                    value={text}
                    onChangeText={(value) => setText(value)}
                />

            </View>
            <TouchableOpacity style={styles.button} onPress={() => createTask()}>

                <Text style={styles.buttonText}>Criar Nova Tarefa</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Tasks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        paddingTop: 40,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 55,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        height: 70,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});