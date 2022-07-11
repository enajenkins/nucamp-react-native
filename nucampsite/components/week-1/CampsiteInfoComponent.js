import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

// destructure the campsite object passed in as props
function RenderCampsite({campsite}) {
  // if campsite object data is not null or undefined... return a card
  if (campsite) {
      return (
          <Card
            featuredTitle={campsite.name}
            image={require('./images/react-lake.jpg')}>

            <Text style={{margin: 10}}>
                {campsite.description}
            </Text>
          </Card>
      );
  }
  return <View />;
}

class CampsiteInfo extends Component {
  // pull out a campsite object from it's props and ssend it to another cxomponent
  // return <RenderCampsite campsite={props.campsite} />;
  return
  constructor(props) {
      super(props);
      this.state = {
          campsites: CAMPSITES
      };
  }

  static navigationOptions = {
      title: 'Campsite Information'
  }

  render() {
      const campsiteId = this.props.navigation.getParam('campsiteId');
      const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
      return <RenderCampsite campsite={campsite} />;
  }
}

// write the <CampsiteInfo /> component as a functional component that recieves props

// function CampsiteInfo(props) {
//   return <RenderCampsite campsite={props.campsite} />;
// }

export default CampsiteInfo;