//aama scroll view flat cards and 

import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native'

import FlatCards from "./components/FlatCards";
import ElivatedCards from "./components/ElivatedCards";
import FancyCards from "./components/FancyCards";
import ActionCards from "./components/ActionCards";
import ContactList from "./components/COntactList";

function AppPro2(){
    return(
        <SafeAreaView>
            <ScrollView>
                <Text>Hello There this an introduction to cards!</Text>
                <FlatCards />
                <ElivatedCards />
                <FancyCards />
                <FancyCards />
                <ActionCards />
                <ContactList />
            </ScrollView>
        </SafeAreaView>
    )
    
}

export default AppPro2