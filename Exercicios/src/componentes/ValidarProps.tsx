import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const ValidarProps = props => {
    return <Text style={{fontSize: 35}}>
        {props.label || 'Opa'}
        {props.ano + 2000}
    </Text>
}

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps