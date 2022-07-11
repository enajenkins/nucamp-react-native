/* ------ OLDER CODE KEPT FOR TEMPORARY REFERENCE ------ */

import React, { Component } from 'react';
import { FlatList } from 'react-native'; // similar to <ul>

// using tile component rather than listitem
// import { ListItem } from 'react-native-elements'; // similar to <li> 
import { Tile } from 'react-native-elements';  

/* no longer using CAMPSITES  because we are fetching data with redux. use the connect function from redux instead */
// import { CAMPSITES } from '../shared/campsites';

/* React Redux provides a connect function for you to connect your component to the store. */
import { connect } from 'react-redux'; 
import { baseUrl } from '../shared/baseUrl'; 
import { View, Text } from 'react-native';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

/* ------ Week 2: #3. Exercise: Using Redux in React Native ------ */
// Connecting to Redux
// recieve the state as a prop and returns the partners data as a state. this signals what part of the state we are using. we will pass the function to the connect function alater
const mapStateToProps = state => {
  return {
      campsites: state.campsites
  };
};


/* ------ OLDER CODE KEPT FOR TEMPORARY REFERENCE - IGNORE ------ */

class Directory extends Component {
  // get rid of constructor in favor of redux
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES
  //   };
  // }

  static navigationOptions = {
    title: 'Directory'
  }

  render() {
    const { navigate } = this.props.navigation;
    // define the function that renders the data the way you want
    // the function gets passed an object by default from <FlatList />
    // we only want one property so we'll destructure the 'item' object
    // <FlatList /> will iterate through every {item}
    const renderDirectoryItem = ({item}) => {
      return (
        <Animatable.View animation='fadeInRightBig' duration={2000}>
        <Tile
          title={item.name}
          caption={item.description}
          featured 
          // onPress is a built in prop
          // first param is the route
          // second param is what we are passing into it
          onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
          // leftAvatar requires an object so we need 2 sets of curly braces
            // 1. {} embed the JS in JSX and...
            // 2. {} define the object literal that will take the property 'source'. source's value will be a funtion provided by node.js called require(). pass the url to the image into require()
          imageSrc={{uri: baseUrl + item.image}}
          />
        </Animatable.View>
      );
    };

    if (this.props.campsites.isLoading) {
      return <Loading />;
    }
    
    if (this.props.campsites.errMess) {
        return (
            <View>
                <Text>{this.props.campsites.errMess}</Text>
            </View>
        );
    }    

    return (
        <FlatList
            data={this.props.campsites.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
  }
}

export default connect(mapStateToProps) (Directory);