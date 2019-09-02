import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/Params'
import Field from './src/Components/Field';
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines } from './src/Functions';
import MineField from './src/Components/MineField';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = this.createState()
    }


    minesAmount = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
        }
    }

    onOpenField = (row, column) =>{
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lost = hadExplosion(board)
        const won = wonGame(board)

        if(lost){
            showMines(board)
            Alert.alert('Perdeeeu!', 'Que buuuurro!')
        }

        if(won){
            Alert.alert('Parabéns', 'Você Venceu"')
        }
        
        this.setState({board, lost, won})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Iniciando o Mines!</Text>
                <Text style={styles.instructions}>Tamanho da Grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>

                <View style={styles.board}>
                    <MineField board={this.state.board} onOpenField={this.onOpenField}>

                    </MineField>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    board: {}
});
