import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headtingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
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

    container:{
        flex: 1,
        flexDirection: 'row',//by default flex direction coulumn hoi
        padding: 8
    },

    card:{
        width: 100,
        height: 100, 
        borderRadius: 4,
        margin: 8
    },

    cardOne:{
        backgroundColor: '#EF5354',
    },
    cardTwo:{
        backgroundColor: '#50DBB4',
    },
    cardThree:{
        backgroundColor: '#5DA3FA',
    }
})