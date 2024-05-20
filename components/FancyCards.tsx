//this is about adding an image

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
            source={{
                uri: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png'
            }} 
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>
                    This is React Native
                </Text>
                <Text style={styles.cardLabel}>
                    Programming language
                </Text>
                <Text style={styles.cardDescription}>
                    This is the react native programming language!!
                </Text>

            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8

    },
    card:{
        height: 300,
        width:300,
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 6
    },
    cardElevated:{
        elevation: 5,
    },
    cardImage: {
        height: 180,
        marginBottom: 8
    },
    cardBody: {

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel:{
        color: '#000000',
        fontSize: 16,
        fontWeight: 'condensedBold'
        
    },
    cardDescription:{
        color: '#000000',
        fontSize: 12,
        marginTop: 6
    }
})