import React, { Component, ClassAttributes } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao';

export const Entrada = (props: { texto: string; chamarQuandoMudar: (texto: string) => void; }) => {
    return  <View>
                <TextInput style={Padrao.input} value={props.texto} onChangeText={props.chamarQuandoMudar}></TextInput>
            </View>
};

export interface IProps extends ClassAttributes<ComunicacaoIndireta> {
    texto: string
    alteraTexto?: () => void
}

interface IState {
    texto: string
}

export default class ComunicacaoIndireta extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            texto: props.texto
        }
    }

    alteraTexto = (texto: string) => this.setState({ texto })

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto} chamarQuandoMudar={this.alteraTexto}></Entrada>
            </View>
        )
    }
}
