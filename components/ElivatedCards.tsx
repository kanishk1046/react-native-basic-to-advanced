import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElivatedCards() {
  return (
    <View>
      <Text style={styles.headtingText}>Elivated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap1</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap2</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap3</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap4</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap5</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap6</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap7</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
            <Text>Tap8</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headtingText:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        height: 100,
        width: 100
    },
    elivated:{
        backgroundColor: '#EF5354',
        elevation: 5,
        shadowOffset:{
            height: 5,
            width: 5,
        },
        shadowColor: '#333',//shadow offset ma colour apvo j pade
        shadowOpacity: 0.4, //opacity ni range 0 thi 1 ni vacche hoi
        shadowRadius: 2
    },
    container:{
        padding: 8
    }
})