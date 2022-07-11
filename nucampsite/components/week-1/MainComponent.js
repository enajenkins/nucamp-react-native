import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

/* Note: notice that this could be a react component. The code is the same */

// Render the <CampsiteInfo /> component to the view below the <Directory /> component when one of the campsites in the directory is clicked 
// create a Stack Navigator for each screen component. 
const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const DirectoryNavigator = createStackNavigator(
  {
      Directory: { screen: Directory },
      CampsiteInfo: { screen: CampsiteInfo }
  },
  {
      initialRouteName: 'Directory',
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const HomeNavigator = createStackNavigator(
  {
      Home: { screen: Home }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

// create drawer navigator
const MainNavigator = createDrawerNavigator(
  {
      Home: { screen: HomeNavigator },
      Directory: { screen: DirectoryNavigator },
      About: { screen: AboutNavigator },
      Contact: { screen: ContactNavigator }
  },
  {
      drawerBackgroundColor: '#CEC8FF'
  }
);

const AppNavigator = createAppContainer(MainNavigator)

/* ------ OLDER CODE KEPT FOR TEMPORARY REFERENCE UNTIL I FULLY MASTER THE REFACTOR ------ */

// currently setting up main as a container component that will be the parent to presentational components
class Main extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES,
  //     selectedCampsite: null // reserve a space in localstate where we will keep track of what campsite has been selected
  //   };
  // }

  // add an event handler to update the selectedCampsite property in the state whenever the user selects a campsite
  // onCampsiteSelect(campsiteId){
  //   this.setState({ selectedCampsite: campsiteId });
  // } 
  render() {
      // return the <Directory /> component and pass it the state's data (the whole, non-destructured 'campsite' array). the <Directory /> component will recieve this array as a property of the props object
      // set up the <CampsiteInfo /> component to be rendered. pass the campsite proj as a prop
      // flex: 1 - flexible component of normal size
      // we are not calling onCampsiteSelect() here - we are just passing it to <Directory /> so it's available to be triggered from there
      return (
          <View style={{
                        flex: 1, 
                        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight 
                      }}>

            {/* <Directory 
              campsites={this.state.campsites} 
              onPress={campsiteId => this.onCampsiteSelect({campsiteId})} />

            <CampsiteInfo  
              campsite={this.states.campsites.filter(
                campsite => campsite.id === this.state.selectedCampsite)[0]} /> */}

            <AppNavigator />

          </View>
      );
  }
}

export default Main;


