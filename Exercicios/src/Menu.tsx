import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import { Avo } from './componentes/ComunicacaoDireta';
import ComunicacaoIndireta from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex
    },
    ComunicacaoIndireta: {
        screen: ComunicacaoIndireta
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva'></Avo>,
    },
    Evento: {
        screen: Evento,
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>,
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Native!' />,
    },
    ParImpar: {
        screen: () => <ParImpar numero={8} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples text='Flexível' />,
    }
    
}, {drawerWidth: 300})