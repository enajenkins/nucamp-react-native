import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet, Button, Modal } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
// no longer using CAMPSITES and COMMENTS imports because we are fetching data with redux. use the connect function from redux instead 

// React Redux provides a connect function for you to connect your component to the store. 
import { connect } from 'react-redux'; 
import { baseUrl } from '../shared/baseUrl'; 
import { postFavorite } from '../redux/ActionCreators';
import { postComment } from '../redux/ActionCreators';


/* ------ Week 2: #3. Exercise: Using Redux in React Native ------ */
// Connecting to Redux
// recieves the state as a prop and returns the data as a state. this signals what part of the state we are using? we will pass 'mapStateToProps' to the connect function later
const mapStateToProps = state => {
  return {
      campsites: state.campsites,
      comments: state.comments,
      favorites: state.favorites
  };
};

const mapDispatchToProps = {
  postFavorite: campsiteId => (postFavorite(campsiteId)),
  postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text))
};

// in the RenderCampsite() method... before we were destructuring {campsite}, but now we need to access several of the props - so change the method to take in the entire props object
function RenderCampsite(props) {

  // but destructure the campsite object inside the method (I'm not clear on why we do this here)
  // this basically assigns the entire props object to the destructured campsite object but I'm not sure why we'd do that other than avoiding this.props.xxxx dot notation. what am I missing?
  // now we can use the favorite and markFavorite props too
  const {campsite} = props;

  // if campsite object data is not null or undefined... return a card
  if (campsite) {
      return (
        <Card
          featuredTitle={campsite.name}
          image={{uri: baseUrl + campsite.image}}> 
          <Text style={{margin: 10}}>
              {campsite.description}
          </Text> 
          <View style={styles.cardRow}>

            <Icon
              name={props.favorite ? 'heart' : 'heart-o'} // curly braces means we are embedding javascript. this logic toggles the icon displayed based on the favorite prop's boolean value
              type='font-awesome'
              color='#f50'
              raised
              reverse
              onPress={() => props.favorite ? 
                console.log('Already set as a favorite') : props.markFavorite()} // if it's already favorited (true), then log out the message saying so - otherwise run the event handler that sets the boolean to true
            />
            <Icon
              name={'pencil'}
              type='font-awesome'
              color='#5637DD'
              raised
              reverse
              onPress={() => props.onShowModal()}  // the built in onPress prop is a function that triggers an event handler. pass in a function that responds to the keypress. 
            /> 
          </View>           
        </Card>
      );
  }
  return <View />;
}

/* ------ WEEK 2: #1. Exercise: Icons, Favorites, and Comments 

  ** Notes on the 'comments' array data flow
    1. imported 'comments' array from the shared directory
    2. added the 'comments' array to the localstate of the <CampsiteInfo /> component and referenced it with 'this.state.comments' in the render function 
    3. using the 'campsiteId', filtered out this.state.comments array to only contain the comments for the campsite we want to render. filter() then returns a new array called 'comments'
    4. pass the newly filtered 'comments' array into the <RenderComments /> component
    5. then we used that passed data array ({comments}) to provide data for the FlatList />
    6. then the renderCommentItem() function renders each comment in the array into the <Text /> components for presentation 
    7. the <RenderComments /> component then returns the <Card /> containing the comments to the <CampsiteInfo /> component which wraps the card and the results of <RenderCampsite /> in a <ScrollView />.
    8. those are all returned through the navigators to the <MainComponent /> then finally to the <App /> component which renders everything to the device.

------ OLD NOTES FOR REFERENCE. PLEASE IGNORE ------    
Mark Favorites:

  * import the icon component from react native elements
  * add the <Icon /> component to the <Card /> component
  * add a favorite prop to state that will store the toggles state of the event handler and set the default state to 'false' 
  * create an event handler to toggle the favorites prop
  * pass the 'favorite' property and the markFavorite() event handler to the RenderCampsite() method
  * in the RenderCampsite() method... before we were destructuring {campsite}, but now we need to access several of the props - so change the method to take in the entire props object
------ OLD NOTES FOR REFERENCE. PLEASE IGNORE ------   

------ */


/* Display comments: */
// define a new function component for displaying the comments that takes in the comments array as a property of the props object. 
function RenderComments({comments}){ // destructure the comments array in the param list

  // set up an arrow function for renderCommentItem. give it a simple <View />
  const renderCommentItem = ({item}) => { // it will automatically get the item prop (How? I don't know why).
    return (
      <View style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.text}</Text>
        <Rating
          imageSize={10}
          startingValue={item.rating} //Use the rating of the current comment being rendered to set the startingValue prop.
          style={styles.rating}
          // onFinishRating={rating => this.setState({rating: rating})} 
          type={'star'} 
          fractions={1} 
          ratingCount={5} 
          readonly
        />
        <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  };

  /* render the comments inside of a <Card /> component 
  
      * return the <Card /> component with the title 'Comments'
      * use <FlatList /> (which will expect the data in the form of an array) 
      * pass <FlatList /> the comments array for it's data prop and the renderCommentItem function for its renderItem prop. then set the keyExtractor to the item id to give each item a unique key. don't forget to convert it from a number to a string. 
  
  */
  return (
    <Card title='Comments' >
      <FlatList 
        data={comments} 
        renderItem={renderCommentItem} 
        keyExtractor={item => item.id.toString()}
      />
    </Card>
  );
};

class CampsiteInfo extends Component {
  // pull out a campsite object from it's props and ssend it to another cxomponent
  // return <RenderCampsite campsite={props.campsite} />;
  // return
  constructor(props) {
      super(props);
      this.state = {
        showModal : false,
        rating: 5,
        author: '',
        text: ''
      };
  }

  // create an event handler to toggle the <Icon /> component event handler's edit modal prop state 
  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }
  
  // event handler for comment submission
  handleComment(campsiteId) {
    this.props.postComment(campsiteId, this.state.rating, this.state.author, this.state.text );
    this.toggleModal();
  }

  // reset the form to the default values in state
  resetForm() {
    this.setState({
      showModal : false,
      rating: 5,
      author: '',
      text: ''
    });
  }

  // create an event handler to toggle the favorites prop
  markFavorite(campsiteId) {
    this.props.postFavorite(campsiteId);
  }

  static navigationOptions = {
      title: 'Campsite Information'
  }

  render() {
      const campsiteId = this.props.navigation.getParam('campsiteId');
      const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
      
      /* the comments array contains ALL of the comments for all of the campsites. in order to get only the comments for the campsite we want, use the campsiteId property to filter out all comments that match that campsiteId and return an array of all matching comments */
      const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);

      // render the comments
      return (
        <ScrollView>
          <RenderCampsite campsite={campsite} 
            favorite={this.props.favorites.includes(campsiteId)} 
            markFavorite={() => this.markFavorite(campsiteId)} // pass the event handler invoked by onPress in as an arrow function
            onShowModal={() => this.toggleModal()} 
          />
          <RenderComments comments={comments} />
          <Modal
              animationType={'slide'}
              transparent={false}
              visible={this.state.showModal}
              onRequestClose={() => this.toggleModal()}
          >
              <View style={styles.modal}>
                <Rating
                  imageSize={40}
                  startingValue={this.state.rating}
                  style={{paddingVertical: 10}}
                  onFinishRating={rating => this.setState({rating: rating})} 
                  type={'star'} 
                  fractions={1} 
                  ratingCount={5} 
                  showRating={true} 
                />
                
                <Input
                  placeholder='Author'
                  leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                  leftIconContainerStyle={{paddingRight : 10}}
                  // need clarity on why these two lines are written this way
                  value={this.state.author} 
                  onChangeText={value => this.setState({ author: value })}
                />

                <Input
                  placeholder="Comment"
                  leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                  leftIconContainerStyle={{paddingRight : 10}}
                  value={this.state.text}
                  onChangeText={value => this.setState({ text: value })}
                />

                <View style={{margin: 10}}>
                  <Button
                      onPress={() => {
                          this.handleComment(campsiteId);
                          this.resetForm();
                      }}
                      color='#5637DD'
                      title='Submit'
                  />
                </View>
                <View style={{margin: 10}}>
                  <Button
                      onPress={() => {
                          this.toggleModal();
                          this.resetForm();
                      }}
                      color='#808080'
                      title='Cancel'
                  />
              </View>
            </View>
          </Modal>
        </ScrollView>
      )
  }
} 

const styles = StyleSheet.create({
  cardRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
  },
  modal: { 
      justifyContent: 'center',
      margin: 20
  },
  modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: '#5637DD',
      textAlign: 'center',
      color: '#fff',
      marginBottom: 20
  },
  modalText: {
      fontSize: 18,
      margin: 10
  },
  rating: {
    alignItems: 'flex-start', 
    paddingVertical: '5%'
  }
});

// not understanding the component parens syntax at the end
export default connect(mapStateToProps, mapDispatchToProps)(CampsiteInfo);