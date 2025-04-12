import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper'

export default function EscudoScreen() {
    const time = {
        nome: "Flamengo",
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    };
    return (
        <View>
            <Title>{time.nome}</Title>
            <Image source={{uri: time.escudo}} style={{width: 200, height:200}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({})