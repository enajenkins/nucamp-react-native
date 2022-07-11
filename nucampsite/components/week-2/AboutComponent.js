import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native'; // similar to <ul>
import { ListItem } from 'react-native-elements'; // similar to <li> 
import { CAMPSITES } from '../shared/campsites';

/* no longer using PARTNERS because we are fetching data with redux. use the connect function from redux instead */
// import { PARTNERS } from '../shared/partners'; 

/* React Redux provides a connect function for you to connect your component to the store. */
import { connect } from 'react-redux'; 
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent'; 


/* ------ Week 2: #3. Exercise: Using Redux in React Native ------ */
// Connecting to Redux
// recieve the state as a prop and returns the partners data as a state. this signals what part of the state we are using. we will pass the function to the connect function alater
const mapStateToProps = state => {
  return {
      partners: state.partners
  };
};


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

// we can get rid of the constructor in favor of redux. 
// anywhere we reference state,partners, we now need to reference props.partners.partners
// the first partners refers to the entire part of the state that handles the partners data including isLoading and errMess props as well as the partners array
// the second partners refers to the partners data array
class About extends Component { 
  // // add the partners data to the state to make available for use
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         campsites: CAMPSITES,
  //         partners: PARTNERS
  //     };
  // }

  // set up static navigation options here
  static navigationOptions = {
    title: 'About Us'
  }

  render() {
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
                leftAvatar={{source: {uri: baseUrl + item.image}}} // set source to an object that gets image from server
            />
        );
    };


    if (this.props.partners.isLoading) {
        return (
            <ScrollView>
                <Mission />
                <Card
                    title='Community Partners'>
                    <Loading />
                </Card>
            </ScrollView>
        );
    }
    if (this.props.partners.errMess) {
        return (
            <ScrollView>
                <Mission />
                <Card
                    title='Community Partners'>
                    <Text>{this.props.partners.errMess}</Text>
                </Card>
            </ScrollView>
        );
    } 
    
    
    // render a <Card /> component with a <FlatList /> inside which has three props as attributes: data, keyExtractor, and renderItem
    // the <FlatList /> component will expect an array
    return (
      <ScrollView> 
        <Mission /> 
        <Card
          wrapperStyle={{margin: 20}}
          title='Community Partners'>
          <FlatList
              //data={this.state.campsites} // define where the data is coming from
              data={this.props.partners.partners}
              renderItem={renderPartner} // specify how to render each item in the list. give it a callback function to handle the data
              keyExtractor={item => item.id.toString()} //set up a unique key and convert it from the number to a string
          />
        </Card>   
      </ScrollView>
    );
  }
}
// connect the component to the redux store by passing the mapStateToProps() function to the connect function. wrap the About component in parens so the about component recieves the partners props from the redux store
export default connect(mapStateToProps)(About);