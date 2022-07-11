import React, { Component } from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import { CAMPSITES } from "../shared/campsites";
import { View, Platform, StyleSheet, Text, ScrollView, Image,
  Alert, ToastAndroid } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";

// add code to trigger the fetching of the state data from the server
import { connect } from "react-redux";
import {
  fetchCampsites,
  fetchComments,
  fetchPromotions,
  fetchPartners,
} from "../redux/ActionCreators";
import Reservation from "./ReservationComponent";
import Favorites from "./FavoritesComponent";
import Login from './LoginComponent';
import NetInfo from '@react-native-community/netinfo';

// instead of mapStateToProps object create an object that contains the 4 action creators we defined to dispatch actions
// this object allows us to access the action creators as props like the mapStateToProps object allowed us to access the state data as props
// IS mapStateToProps and object or a function???
const mapDispatchToProps = {
  // all action creators below have been 'thunked' in order to send async calls to the server using fetch to bring back data
  fetchCampsites,
  fetchComments,
  fetchPromotions,
  fetchPartners,
};

/* ------ Navigation Icons and Custom Side Drawer 

Stack Navigator Icons:
  * import StyleSheet api from react native and the Icon component from react elements
  * add icons to the individual navigator screens
  * set up a stylesheet called 'styles' using the StyleSheet.create() method from the StyleSheet api we imported. it will be used in the 'iconStyle' prop and you can pass in as many params as you want

------ */

// Render the <CampsiteInfo /> component to the view below the <Directory /> component when one of the campsites in the directory is clicked
// create a Stack Navigator for each screen component.
const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="address-card"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="info-circle"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const DirectoryNavigator = createStackNavigator(
  {
    // you can set different navigation options just for each individual screen in the stack here
    Directory: {
      screen: Directory,
      navigationOptions: ({ navigation }) => ({
        // pass in the navigation prop
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon} // custom style we will create
            onPress={() => navigation.toggleDrawer()} // onPress make it interactive
          />
        ),
      }),
    },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      // applies to all screens in DirectoryNavigator stack
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    // pass in the destructured navigation prop
    defaultNavigationOptions: ({ navigation }) => ({
      // wrap the object in parens so the arrow function knows it's an object literal and not the start of the function body
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: { screen: Reservation },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="tree"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const FavoritesNavigator = createStackNavigator(
    {
      Favorites: { screen: Favorites },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#5637DD",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
        headerLeft: (
          <Icon
            name="heart"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    }
  );

/* ------ Navigation Icons and Custom Side Drawer 

Custom Side Drawer:
  * set up the custom side drawer 
  * import Text, ScrollView, Image from 'react-native',  DrawerItems from 'react-navigation-drawer', and SafeAreaView from 'react-native-safe-area-view'
  * SafeAreaView (iPhone X) will define a safe area where nothing elose will be laid out to account for the physical area on an iPhone X where rounded corners and the camera notch lives. normally this would be default but we are adding a custom view.
  * define a CustomDrawerContentComponent() function that will recieve and pass in props as its param, and will return the <View /> of it's customized drawer. 
  * wrap everything inside of it in a <ScrollView /> component 
  * define a <SafeAreaView /> inside the <ScrollView /> add the recommended style prop for container and the recommended forceInset prop 
  * add an inner <View /> component with a flex layout

------ */

const LoginNavigator = createStackNavigator(
  {
      Login: { screen: Login }
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          },
          headerLeft: <Icon
              name='sign-in'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>NuCamp</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

// create a drawer navigator
// it will hold all of the stack navigators as screens inside of it
const MainNavigator = createDrawerNavigator(
  {
    Login: {
        screen: LoginNavigator,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='sign-in'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    // set nav options for each screen in the drawer. set them up as objects that contain the drawer icon prop which holds a function passing in a dynamic tintColor prop
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Directory: {
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        drawerLabel: "Reserve Campsite",
        drawerIcon: ({ tintColor }) => (
          <Icon name="tree" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            drawerLabel: 'My Favorites',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='heart'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    }
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: "#CEC8FF",
    contentComponent: CustomDrawerContentComponent, //
  }
);

const AppNavigator = createAppContainer(MainNavigator);

// currently setting up main as a container component that will be the parent to presentational components
class Main extends Component {
  // add the built in lifecycle method componentDidMount() to call the action creators AFTER the component has been created
  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchPartners();
    this.showNetInfo();



    /* ------ Task 3: Update NetInfo.fetch() call to use async/await
      https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
    
      * An 'async' function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code. So the 'async' keyword is added to functions to tell them to return a promise rather than directly returning the value.

      * 'await' only works inside async functions. This can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value. In the meantime, other code that may be waiting for a chance to execute gets to do so. You can use await when calling any function that returns a Promise, including web API functions.

    
    ------ */ 


    showNetInfo = async () => {
      // update the NetInfo.fetch() call to use async/await to handle the promise returned from the operation
      const connectionInfo = await NetInfo.fetch();

      (Platform.OS === 'ios')
          ? Alert.alert('Initial Network Connectivity Type:', connectionInfo.type)
          : ToastAndroid.show('Initial Network Connectivity Type: ' +
              connectionInfo.type, ToastAndroid.LONG);
    };

    this.unsubscribeNetInfo = NetInfo.addEventListener(connectionInfo => {
        this.handleConnectivityChange(connectionInfo);
    });
  }

  componentWillUnmount() {
      this.unsubscribeNetInfo();
  }

  getImageFromCamera = async () => {
    // const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      const capturedImage = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
      });
      if (!capturedImage.cancelled) {
        console.log(capturedImage);
        // this.setState({ imageUrl: capturedImage.uri });
        this.processImage(capturedImage.uri);
      }
    }
  };

  handleConnectivityChange = connectionInfo => {
      let connectionMsg = 'You are now connected to an active network.';
      switch (connectionInfo.type) {
          case 'none':
              connectionMsg = 'No network connection is active.';
              break;
          case 'unknown':
              connectionMsg = 'The network connection state is now unknown.';
              break;
          case 'cellular':
              connectionMsg = 'You are now connected to a cellular network.';
              break;
          case 'wifi':
              connectionMsg = 'You are now connected to a WiFi network.';
              break;
      }
      (Platform.OS === 'ios')
          ? Alert.alert('Connection change:', connectionMsg)
          : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
  }

  render() {
    // flex: 1 - flexible component of normal size
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

// set up a stylesheet. you can pass in as many params as you want
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

// no mapStateToProps() argument as first arg so use null
export default connect(null, mapDispatchToProps)(Main);


/* ------ Building the APK


  Bundle                     Size
  ┌ index.ios.js          2.05 MB
  ├ index.android.js      2.06 MB
  ├ index.ios.js.map      6.87 MB
  └ index.android.js.map   6.9 MB

  Learn more about JavaScript bundle sizes: https://expo.fyi/javascript-bundle-sizes

  Analyzing assets
  Saving assets
  No assets changed, skipped.

  Processing asset bundle patterns:
  - C:\Users\enawarriorprincess\Desktop\NucampFolder\4-React-Native\nucampsite\**\*

  Uploading JavaScript bundles
  Publish complete

  �  Manifest: https://exp.host/@enajenkins/nucampsite/index.exp?sdkVersion=38.0.0 Learn more: https://expo.fyi/manifest-url
  ⚙️   Project page: https://expo.io/@enajenkins/nucampsite Learn more: https://expo.fyi/project-page  

  Checking if this build already exists...

  Build started, it may take a few minutes to complete.
  You can check the queue length at https://expo.io/turtle-status

  You can make this faster. �
  Get priority builds at: https://expo.io/settings/billing

  You can monitor the build at

  https://expo.io/accounts/enajenkins/builds/deedf732-fd21-4045-b535-b8d5566891b5

  Waiting for build to complete.
  You can press Ctrl+C to exit. It won't cancel the build, you'll be able to monitor it at the printed 
  URL.
  √ Build finished.

  Successfully built standalone app: https://expo.io/artifacts/bfcc65da-64f4-4865-a902-66ca1b863318    

  C:\Users\enawarriorprincess\Desktop\NucampFolder\4-React-Native\nucampsite>

*/