//simple hello wrorls code and kevi rite jate caode lakhay


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  // aa badh acomponents che
  SafeAreaView,//aaj kal na phones ma notches and all aave to viewable area ma code dekhay evu rakhvanu hoi
  Text,
  View,//view is just like a div in the web
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(){
  //aama apde jsc ma code lkariye which is html inside javascript because its nither pure html nor pure javascript etle aa method produce kare components
  // in the world of jsx  a starting tag must have an ending tag as well because it is compulsory.
  //and simple html jevu nai lakhay kemke aa jsx che to aama apde return karvu pade to aakho html code ke je bi hoi ene apde ek return ma aapu pade
  

  return (
    <SafeAreaView>
      <View>
        <Text>
          Hello World !
        </Text>
      </View>
    </SafeAreaView>
  )
}

//styling e top to bottom ma aape unline wenb je left to right ma aape

export default App;
