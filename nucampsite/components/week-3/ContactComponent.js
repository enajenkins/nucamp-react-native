import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

  constructor(props) {
      super(props);
      this.state = {
          campsites: CAMPSITES
      };
  }
  
  // set up static navigation options here
  static navigationOptions = {
    title: 'Contact Us'
  }

  /* ------ Task 2: Show the address of the company HQ ------ */
  render(){
    return (
      <ScrollView>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card
          wrapperStyle={{margin: 20}}
          title='Contact Information'>

          <Text>1 Nucamp Way</Text>
          <Text>Seattle, WA 98001</Text>
          <Text style={{marginBottom: 10}}>U.S.A.</Text>

          <Text>Phone: 1-206-555-1234</Text>
          <Text style={{marginBottom: 10}}>Email: campsites@nucamp.co</Text>
          
          </Card>
          </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;