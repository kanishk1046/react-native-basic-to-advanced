import { 
    Image, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Linking} from 'react-native'

    import React from 'react'

export default function ActionCards() {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>ActionCards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContanter}>
            <Text style={styles.headerText}>
                What's new here?
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Just like every year, Javascript brings in new features. This year
                javascript is bringing 4 new features, which are almost in
                production rollout. I won't be wasting much more time and directly
                jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
            >
                <Text style={styles.socialLinks}>Follow Me !</Text>
            </TouchableOpacity>
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
        height: 360,
        width: 350,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12
    },
    elevatedCard:{
        backgroundColor: 'E07C24',
        elevation: 4,
        shadowOffset:{
            width: 3,
            height: 3
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContanter:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    cardImage:{
        height: 100
    },
    bodyContainer:{
        padding: 10
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks:{
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})