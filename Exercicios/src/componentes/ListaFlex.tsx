import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.8 },
    { id: 2, nome: 'Maria', nota: 5.3 },
    { id: 3, nome: 'Fulano', nota: 6.1 },
    { id: 4, nome: 'Beltrano', nota: 7.8 },
    { id: 5, nome: 'Ciclano', nota: 10.0 },
    { id: 6, nome: 'Rapha', nota: 9.9 },
    { id: 7, nome: 'Gabs', nota: 4.7 },
    { id: 8, nome: 'Igor', nota: 3.6 },
    { id: 9, nome: 'Pedro', nota: 2.6 },
    { id: 10, nome: 'Carlos', nota: 2.6 },
    { id: 11, nome: 'João', nota: 7.8 },
    { id: 12, nome: 'Maria', nota: 5.3 },
    { id: 13, nome: 'Fulano', nota: 6.1 },
    { id: 14, nome: 'Beltrano', nota: 7.8 },
    { id: 15, nome: 'Ciclano', nota: 10.0 },
    { id: 16, nome: 'Rapha', nota: 9.9 },
    { id: 17, nome: 'Gabs', nota: 4.7 },
    { id: 18, nome: 'Igor', nota: 3.6 },
    { id: 19, nome: 'Pedro', nota: 2.6 },
]


const styles = StyleSheet.create({
    itemEstilo: {
        paddingHorizontal: 15,
        height: 70,
        backgroundColor: '#DDD',
        borderWidth: 0.5,
        borderColor: '#222',
        //flex
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export const Aluno = props =>
    <View style={styles.itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item}></Aluno>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()}></FlatList>
        </ScrollView>
    )
}
