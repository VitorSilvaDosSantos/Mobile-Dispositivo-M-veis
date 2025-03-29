import React from "react";
import {Text, View,  StyleSheet} from "react-native"

export default function SegundoComponente() {

    return <Text style={style.textoGrande } >Segundo Componente</Text>

}

const style = StyleSheet.create({
    textoGrande: {
        fontSize: 40,
        fontWeight: 600
    }
})

