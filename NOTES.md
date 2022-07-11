# React Native

## Expo CLI

  Usage: expo [command] [options]

  Options:

    -V, --version                     output the version number
    --non-interactive                 Fail, if an interactive prompt would be 
required to continue.
    -h, --help                        output usage information

  Commands:

    login                             Login to an Expo account
    logout                            Logout of an Expo account
    register                          Sign up for a new Expo account
    whoami                            Return the currently authenticated account

    init [path]                       Create a new Expo project
    start [path]                      Start a local dev server for the app    
    start:web [path]                  Start a Webpack dev server for the web app
    publish [path]                    Deploy a project to Expo hosting        
    export [path]                     Export the static files of the app for hosting it on a web server
    install [packages...]             Install a unimodule or other package to 
a project
    send [path]                       Share the project's URL to an email address

    client:install:ios                Install the Expo client for iOS on the simulator
    client:install:android            Install the Expo client for Android on a connected device or emulator

    diagnostics [path]                Log environment info to the console     
    doctor [path]                     Diagnose issues with the project        
    upgrade [sdk-version]             Upgrade the project packages and config 
for the given SDK version

    publish:history [path]            Log the project's releases
    publish:details [path]            Log details of a published release      
    publish:set [path]                Specify the channel to serve a published release
    publish:rollback [path]           Undo an update to a channel

    build:ios [path]                  Build and sign a standalone IPA for the 
Apple App Store
    build:android [path]              Build and sign a standalone APK or App Bundle for the Google Play Store
    build:web [path]                  Build the web app for production        
    build:status [path]               Get the status of the latest build for the project

    credentials:manager [path]        Manage your credentials
    fetch:ios:certs [path]            Download the project's iOS standalone app signing credentials
    fetch:android:keystore [path]     Download the project's Android keystore 
    fetch:android:hashes [path]       Compute and log the project's Android key hashes
    fetch:android:upload-cert [path]  Download the project's Android keystore 

    push:android:upload [path]        Upload an FCM key for Android push notifications
    push:android:show [path]          Log the value currently in use for FCM notifications for this project
    push:android:clear [path]         Delete a previously uploaded FCM credential

    url [path]                        Log a URL for opening the project in the Expo client
    url:ipa [path]                    Log the download URL for the standalone 
iOS binary
    url:apk [path]                    Log the download URL for the standalone 
Android binary

    webhooks [path]                   List all webhooks for a project
    webhooks:add [path]               Add a webhook to a project
    webhooks:remove [path]            Delete a webhook
    webhooks:update [path]            Update an existing webhook

    upload:android [path]             Upload an Android binary to the Google Play Store
    upload:ios [path]                 macOS only: Upload an iOS binary to Apple. An alternative to
                                      Transporter.app

    customize:web [path]              Eject the default web files for customization
    eject [path]                      Create native iOS and Android project files. Read more:
                                      https://docs.expo.io/bare/customizing/  

    client:ios [path]                 Experimental: build a custom version of 
the Expo client for iOS using
                                      your own Apple credentials

  Run a command with --help for more info �
    $ expo start --help


## expo start

* This will compile the project and then start serving the project through Expo at the URL exp://<Your Computer's IP address>:19000.

* It will also automatically open a browser tab pointed to http://localhost:19002 -- this is the Expo DevTools. If you don't see it, go to http://localhost:19002 in your web browser.

* You will not be able to access the project yet without connecting to it with an Android emulator or a mobile device


## Your project is ready!

To run your project, navigate to the directory and run one of the following yarn commands.

- cd nucampsite
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands 
below.
- yarn android
- yarn ios # requires an iOS device or macOS for access to an iOS simulator
- yarn web

Expo DevTools is running at http://localhost:19002
Opening DevTools in the browser... (press shift-d to disable)
Starting Metro Bundler.

  exp://10.0.0.240:19000

  To run the app with live reloading, choose one of:
  • Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
  • Press a for Android emulator, or w to run on web.
  • Press e to send a link to your phone with email.


 › Press a | open Android
 › shift+a | select a device or emulator     
 › Press w | open web

 › Press o | open project code in your editor
 › Press c | show project QR
 › Press p | toggle build mode (development)
 › Press r | restart bundler
 › shift+r | restart and clear cache

 › Press d | open Expo DevTools
 › shift+d | toggle auto opening DevTools on startup (enabled)
 › Press e | share the app link by email


## Installation Notes

Setup Type: Standard
SDK Folder: C:\Users\enawarriorprincess\AppData\Local\Android\Sdk
JDK Location: C:\Program Files\Android\Android Studio\jre
Total Download Size: 1.43 GB
SDK Components to Download: 

Android Emulator
  
240 MB

Android SDK Build-Tools 30.0.2
  
51.3 MB

Android SDK Platform-Tools
  
8.03 MB

Google APIs Intel x86 Atom System Image
  
1.13 GB

## Set up the Android emulator
While React Native can be used to develop for both iOS and Android, due to the many differences in mobile devices, during this class we will use the Android default emulator (which can be installed on both Windows and MacOS) to test your code in a consistent simulated environment.
The download, install, and setup will take a while, so don't count on doing it last minute. Set aside at minimum, one hour for this - though most of it will be passive waiting time.


Part I: Install Android Studio 
1. Download the installer for the current stable version of Android Studio at: https://developer.android.com/studio/. This is a large app; the installer zip file alone is ~1GB. If you need to clear space on your hard drive, do so beforehand. 
System requirements: Install Android Studio to a hard disk with at minimum 2.6GB (Windows) or 2GB (MacOS/Linux) disk space - preferably 4GB. You will need another 7-10 GB free disk space for the Android Virtual Device. You will also need at minimum 4GB RAM (preferably 8+) and 1200x800 screen resolution. The full system requirements can be found at the bottom of this page.
Windows: If your system uses an Intel processor, it must also be capable of Intel Virtualization Technology (VT-x) - most modern Intel processors are. If you aren't sure, look up your processor by going to https://ark.intel.com. If you do not know your processor, type This PC into your search bar then right click and select "Properties" on the "computer" app that comes up. 
At the time of writing, the current stable version is 4.0.1. If you find issues with a later version, you can find this version in the download archives at: https://developer.android.com/studio/archive.  
2. Run the installer and the following Setup Wizard, both with standard settings. You do not need to import settings. Make sure to check the box to install the Android Virtual Device. Copy down the path for the Android SDK Location/Path. If the default location that is provided for you is not what you want (for example, it is on a drive with low free disk space and you want to use a different drive), change it here and remember the new path. If you have enough space in the default location's drive, you do not need to change it. Continue the SDK install using the default recommended options. Currently, that is Android SDK + Android SDK Platform API 28: Android 9.0 (Pie.)

3. Windows with Intel processor only: Make sure that the checkbox for Performance (Intel HAXM) is checked. If you do not know your processor type in Windows, type This PC into your search bar then right click and go to "Properties" on the "computer" app that comes up. If your processor is AMD, you will not install Intel HAXM, but you will have an extra step later. 
4. For Windows with AMD Processor only: Next, you will need to enable the Windows Hypervisor Platform via Windows Features. This will take the place of the Intel HAXM in your system. Make sure you have the Windows 10 April 2018 update installed. Type "Windows Features" into your Windows search bar and open the "Turn Windows features on or off" option that comes up. Then check the box to enable Windows Hypervisor Platform.  

Screenshot of Windows Hypervisor settings with Windows Hypervisor Platform checked


For more information on Windows Hypervisor, see: https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html.



Part II: Add the Android SDK Location to your PATH
1. First, verify your Android SDK location. Open Android Studio and go to Configure > SDK Manager > Appearance & Behavior > System Settings > Android SDK. At the top of this dialog, you will see the Android SDK Location. By default, it will look like this for MacOS: /Users/<username>/Library/Android/sdk and like this for Windows: C:\Users\<username>\AppData\Local\Android\sdk - unless you changed the default during installation. Copy this path down - you will need it next.

2. Add the SDK location:

Windows
Type environment into your Windows search bar and click the top result, Edit the system environment variables. In the System Properties dialog that pops up, click the Environment Variables button in the bottom right.
In the next dialog that pops up, look for the bottom half of the dialog labeled System variables and hit the New button corresponding to it (NOT the New button for User variables!).
For the variable name, type:
 ANDROID_HOME 
For the variable value, type the path to your Android SDK Location you copied down above. Hit OK. 
Next, in the list of System variables, find the one named Path. Select it and click the Edit button. Click New then type in your Android SDK Location path again, but this time you will add \platform-tools to the end of the path. For example, it might look like this (but the <username> will be a real username...):
C:\Users\<username>\AppData\Local\Android\sdk\platform-tools
android platform tools windows path definition screenshot

Hit OK to save the changes.


