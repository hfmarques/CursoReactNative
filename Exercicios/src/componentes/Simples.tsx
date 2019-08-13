import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export default function (props) {
    return <Text style={[Padrao.ex]}>Arrow 1: {props.text}</Text>
}