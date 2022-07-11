import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native'; // similar to <ul>
import { ListItem } from 'react-native-elements'; // similar to <li> 
import { CAMPSITES } from '../shared/campsites';
import { PARTNERS } from '../shared/partners';

/* ------ Task 3: Add mission statement and Community Partners------ */

// define the company mission statement in a separate functional component named Mission.
// use a <Card /> to display text
function Mission() {
  return (
    <Card
      wrapperStyle={{margin: 20}}
      title='Our Mission'>
      <Text>
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
      </Text>
    </Card>
  )
}

class About extends Component {
  // add the partners data to the state to make available for use
  constructor(props) {
      super(props);
      this.state = {
          campsites: CAMPSITES,
          partners: PARTNERS
      };
  }

  // set up static navigation options here
  static navigationOptions = {
    title: 'About Us'
  }

  render(){
    // 
    // const { navigate } = this.props.navigation;
    // destructure the property 'item' inside the parameter list
    // return a ListItem component with three props: title, subtitle, and leftAvatar
    // no need for the onPress prop nor the navigate function since the items in this list will not be links
    // add the attr renderItem={renderPartner} to the appropriate component
    const renderPartner = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
            />
        );
    };
    
    // render a <Card /> component with a <FlatList /> inside which has three props as attributes: data, keyExtractor, and renderItem
    // the <FlatList /> component will expect an array
    return (
      <ScrollView> 
        <Mission /> 
        <Card
          wrapperStyle={{margin: 20}}
          title='Community Partners'>
          <FlatList
              data={this.state.campsites} // define where the data is coming from
              renderItem={renderPartner} // specify how to render each item in the list. give it a callback function to handle the data
              keyExtractor={item => item.id.toString()} //set up a unique key and convert it from the number to a string
          />
        </Card>   
      </ScrollView>
    );
  }
}

export default About;