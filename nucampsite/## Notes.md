## Notes

* Question #1: React Navigation is one solution that's available for routing with React Native. Research and name at least one or more others. 
  1. Custom Navigators: https://reactnavigation.org/docs/custom-navigators
  2. Custom Routers: https://reactnavigation.org/docs/custom-routers
  3. React Native Navigation (RNN): https://blog.logrocket.com/react-navigation-vs-react-native-navigation-which-is-right-for-you-3d47c1cd1d63/
  4. React Router Native: https://www.npmjs.com/package/react-router-native



* Question #2: Look up the React Navigation official documentation online, and find the documentation on Navigation prop reference. Describe one of the convenience functions contained in the Navigation prop that was not used in your exercises.

  - setParams: allows you to update the route.params of the current screen by merging the provided params object with the current params. This seems like it would be useful for something like localization



* Question #3: In the React Navigation official documentation, there are several other navigator types that are mentioned aside from StackNavigator and DrawerNavigator. Choose one of the navigators that we have not covered, read about it, then write 3-4 sentences to describe it to your classmates

https://reactnavigation.org/docs/hello-react-navigation

  - createMaterialTopTabNavigator: Material Design themed navigator that uses the swipe gesture or tapping of navigation tabs to allow the user to navigate screens. It's highly customizable and wraps react-native-tab-view. Since Material Design is applied as default, the indicator is placed at the top of the tabs and is draggble - and the pattern follows MD guidelines concerning motion and context.   https://reactnavigation.org/docs/material-top-tab-navigator/
  

  ## Cannot connect to the Metro server.

Try the following to fix the issue:
  - Ensure that the Metro server is running and available on the same network
  - Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
  - If you're on a physical device connected to the same machine, run 'adb reverse tcp:8081 tcp:8081' to forward requests from your device
  - If your device is on the same Wi-Fi network, set 'Debug server host & port for device' in 'Dev settings' to your machine's IP address and the port of the local dev server - e.g. 10.0.1.1:8081

URL: 10.0.0.240:19001

## Restarting Steps...
  1. Stop terminal processes if they are running
  2. Restart Expo's Metro Bundler that appears on http://localhost:19002/ using 'expo start' terminal command
  3. Run Android device simulator in Android Studio's Android Virtual Device (ADV)
  4. Go to Expo's Metro Bundler and 'Run on Android device/emulator' or send to physical phone
  

  ## JSON Server
  If you have updated your Node version, your global installation of json-server from the React course may no longer be present. To check, enter into your terminal from any location:

    json-server -v

    If this gives you a version number, your json-server is still installed. If not, you can install it again globally with:

    yarn global add json-server
    
    Start up json-server:
    json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000

## Debugging
If for some reason, Ctrl-M or Command-M are not working for you in the emulator, open a new bash terminal session and enter this command (from any directory) to open the Developer Menu:
  adb shell input keyevent 82

  ### Standalone React-Devtools
  Globally install the standalone react-devtools as follows (from your bash terminal in any directory):
  yarn global add react-devtools@4.8.2
  Start the standalone React Devtools by typing react-devtools at the prompt (don't forget the hyphen). 
  If you are using a real mobile device and not the Android emulator, then open a new bash terminal and enter this command:
  adb reverse tcp:8097 tcp:8097


## Building the APK

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



## Fetch your Android Keystore

C:\Users\enawarriorprincess\Desktop\NucampFolder\4-React-Native\nucampsite>expo fetch:android:keystore
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   There is a new version of expo-cli available (3.28.5).                │
│   You are currently using expo-cli 3.28.0                               │
│   Install expo-cli globally using the package manager of your choice;   │
│   for example: `npm install -g expo-cli` to get the latest version      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
Accessing credentials for enajenkins in project nucampsite
Saving Keystore to C:\Users\enawarriorprincess\Desktop\NucampFolder\4-React-Native\nucampsite\nucampsite.jks
Keystore credentials
  Keystore password: 5d9e2c9980d142279bf534d1fa6c445f
  Key alias:         QGVuYWplbmtpbnMvbnVjYW1wc2l0ZQ==
  Key password:      7e8a51ae0e4a42c4a0a8782d7247f409

  Path to Keystore:  C:\Users\enawarriorprincess\Desktop\NucampFolder\4-React-Native\nucampsite\nucampsite.jks
  