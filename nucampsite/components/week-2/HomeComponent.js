import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

/* no longer using CAMPSITES, PROMOTIONS, PARTNERS  because we are fetching data with redux. use the connect function from redux instead */
// import { CAMPSITES } from '../shared/campsites';
// import { PROMOTIONS } from '../shared/promotions';
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
    campsites: state.campsites,
    promotions: state.promotions,
    partners: state.partners
  };
};


// // create a <RenderItem /> component to make rendering the list DRY
// // pass in the deconstructed item object as props
// function RenderItem({item}) {
  function RenderItem(props) {
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }

    if (item) {
      return (
        <Card
            featuredTitle={item.name}
            image={{uri: baseUrl + item.image}}
        >
          <Text style={{margin: 10}}>
              {item.description}
          </Text>
        </Card>
      );
    }
    return <View />;
}

// no state needed. using redux
class Home extends Component {
    // bring the data into home by setting up state in the constructor
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES,
    //         promotions: PROMOTIONS,
    //         partners: PARTNERS
    //     };
    // }

    static navigationOptions = {
        title: 'Home'
    }

    // ScrollView loads all of it's child components at one time
    // FlatList uses lazy loading. the offscreen parts are removed frmo memory to preservce performance
    // FlatList is more performant than ScrollView
    // RenderItem will render a card. set item prop by filtering the campsites data from state to find the featured flag and get the first item of the array returned by the filter() method
    render() {
      return (
        <ScrollView>
          <RenderItem
            item={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
            isLoading={this.props.campsites.isLoading}
            errMess={this.props.campsites.errMess}
          />
          <RenderItem
            item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
            isLoading={this.props.promotions.isLoading}
            errMess={this.props.promotions.errMess}
          />
          <RenderItem
            item={this.props.partners.partners.filter(partner => partner.featured)[0]}
            isLoading={this.props.partners.isLoading}
            errMess={this.props.partners.errMess}
          />
        </ScrollView>
      );
    }
}

export default connect(mapStateToProps)(Home);