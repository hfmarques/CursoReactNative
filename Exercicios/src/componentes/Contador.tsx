import React, { Component, ClassAttributes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Padrao from '../estilo/Padrao';

export interface IProps extends ClassAttributes<Contador> {
    numeroInicial: number
    maisUm?: () => void
    limpar?: () => void
}

interface IState {
    numero: number
}

export default class Contador extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            numero: props.numeroInicial
        }
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render() {
        return <View>
            <Text style={Padrao.ex}>{this.state.numero}</Text>
            <TouchableHighlight style={Padrao.ex} onPress={this.maisUm} onLongPress={this.limpar}>
                <Text>Incrementar/Zerar</Text>
            </TouchableHighlight>
        </View>
    }
}