//thsi contains basics ke darkmode and all kevi rite apvanu and style sheet ma kevi rite kaam karvanu and some basic points 
import React from "react";

import {
    SafeAreaView,
    Text,
    View,
    useColorScheme,//useColorScheme is a react hook it provides us to color scheme updates from the appearence module 
    StyleSheet,
} from 'react-native'

function AppPro(): JSX.Element{

    const isDarkMode = useColorScheme() === 'dark'
    //niche je style lakhelu che ne te availabke property che and curly bracket ma lakhelu che te apde object name che.
    //curly braces thi objecr ne call thai 

    //means the syntx for applying a style is 
    //property={object_name.container || ement_name || item}

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                    Hellooo!!
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    //double braces etle object inside a method
    //styles object name che 
    //aama container hoi sake item hoi sake element hoi sake bas ek "." mukvanu hoi jyare call karo tyre.
    container: {
        //this is a nested object matlab object ni andar object
        flex: 1,
        alignItems: 'center',//align items works from left to right
        justifyContent: 'center',//justify content works from top to bottom
    },

    whiteText: {
        color: '#FFFFFF'
    },
    blackText: {
        color: '#000000'
    }
})

export default AppPro 