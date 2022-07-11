import React, { Component } from 'react';
import { FlatList } from 'react-native'; // similar to <ul>
import { ListItem } from 'react-native-elements'; // similar to <li> 
import { CAMPSITES } from '../shared/campsites';

/* ------ OLDER CODE KEPT FOR TEMPORARY REFERENCE - IGNORE ------ */

    //// functional component that recieves props from <Main />
    // function Directory(props) {

    //    // define the function that displays each of the pieces of the data into a list item
    //          // define the function that renders the data the way you want
        // the function gets passed an object from <ListItem />
        // <ListItem /> will iterate through every {item}
    //     const renderDirectoryItem = ({item}) => {
    //         return (
    //             <ListItem
    //                 title={item.name}
    //                 subtitle={item.description}
    //                 onPress={() => props.onPress(item.id)} // built in prop | when pressed on mobile, it invokes a function that you pass it | we are using it to trigger the event handler: onPress()
    //                 leftAvatar={{ source: require('./images/react-lake.jpg')}}
    //             />
    //         );
    //     };

    //     return (
    //         // pass a few properties to the <FlatList /> component as attributes
    //         // the <FlatList /> component will expect an array
    //         <FlatList
    //             data={props.campsites} // define where the data is coming from
    //             renderItem={renderDirectoryItem} // specify how to render each item in the list. give it a callback function to handle the data
    //             keyExtractor={item => item.id.toString()} //set up a unique key and convert it from the number to a string
    //         />
    //     );
    // }

/* ------ OLDER CODE KEPT FOR TEMPORARY REFERENCE - IGNORE ------ */

class Directory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }

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
        <ListItem
          title={item.name}
          subtitle={item.description}
          // onPress is a built in prop
          // first param is the route
          // second param is what we are passing into it
          onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
          // leftAvatar requires an object so we need 2 sets of curly braces
            // 1. {} embed the JS in JSX and...
            // 2. {} define the object literal that will take the property 'source'. source's value will be a funtion provided by node.js called require(). pass the url to the image into require()
          leftAvatar={{ source: require('./images/react-lake.jpg')}}
        />
      );
    };

    return (
        <FlatList
            data={this.state.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
  }
}

export default Directory;