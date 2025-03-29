import React from "react";
import {View, Text, StyleSheet} from "react-native"

export default function PrimeiroComponente() {

    return (
        <View>
            <Text style={style.textoGrande } >Primeiro Componente</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textoGrande: {
        fontSize: 40,
        fontWeight: 600
    }
})