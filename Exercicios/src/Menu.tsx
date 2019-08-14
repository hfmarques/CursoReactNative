import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/multi'
import Contador from './componentes/Contador';

export default createDrawerNavigator({
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