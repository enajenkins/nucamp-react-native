# Setting Up the Android Emulator
Objectives
Install Android Studio and use its AVD Manager to set up an Android emulator, a.k.a. an Android Virtual Device.
Run your React Native app on your AVD. 


Instructions

Set up the Android emulator
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
MacOS and Linux
Open a bash terminal and enter this command:
nano ~/.bash_profile
See this guide if you need extra information on using the Nano text editor.
Type the line below into the editor, replacing the example path (the part in bold) with the path to your Android SDK location. 
export ANDROID_SDK=/Users/<username>/Library/Android/sdk
MacOS only: Also add this line:
export PATH=/Users/<username>/Library/Android/sdk/platform-tools:$PATH
You should end up with your editor contents looking similar to the below. If there are other lines in your .bash_profile file that were already in there when you opened the editor, leave them and add your content above or below them. 
macos nano android path example
To save and exit, type: Control+O, enter, Control+X, enter.
Apply changes to your current terminal session:
source ~/.bash_profile


Verify changes
Close the bash terminal session then open a new one.
If you are using the VS Code integrated terminal, make sure to close the session using the trash can icon and not the X icon (which only hides the session and does not close it), then open a new terminal. You should not see any previously entered commands in the new session.
Type adb and make sure the command works. You should see a list of command line options. 



Part III: Install an Android emulator (Android Virtual Device)
1. Open Android Studio and go to Configure > AVD Manager. Click: + Create Virtual Device. 

2. While you may wish to install other devices later, to begin, we will install the latest version of Pixel as recommended by Expo. (At the time of this writing, this is Pixel 3.) Select this and hit Next.
3. In the "Select a system image" dialog that appears next, choose Pie: API Level 28/Android 9.0 or higher. But don't hit Next yet. 

4. Still in the "Select a system image" dialog, click on the middle tab that says "x86 Images". There, for the Release Name that you selected in the first tab, select the corresponding x86_64 ABI option with the Target of "Android x.0 (Google APIs)", as shown below with Pie as the example:

Screenshot of selecting system image

5. Click the Download link next to the Release Name, accept the license agreement, and hit Next.
6. Once the download is completed, make sure that the downloaded system image is selected and hit Next, then Finish. This will create the virtual device then return you to the Virtual Device Manager. 

7. You should now see a row containing your newly installed AVD. In its far-right Actions column, hit the triangular Play button (not the Play Store button) to launch your emulator/AVD.

Note: If you have an Intel processor with VT-x support but you are unable to install HAXM nor launch the AVD or install HAXM, you may need to check that Virtualization is enabled in your BIOS. To access the BIOS, follow these steps: https://www.laptopmag.com/articles/access-bios-windows-10 - then look for the Virtualization setting and enable it. 


Part IV: Testing the emulator with React Native/Expo.
1. Make sure that your AVD is running (see part III, Step 5 above).  

2. Open your bash terminal to your React Native nucampsite project folder and type expo start.

3. A browser tab for http://localhost:19002 should open automatically. This is the page for Expo DevTools. If it doesn't open automatically, point your browser to that address. You'll know you're on the right page when you see "Metro Bundler" in the upper left. From that page, click the "Run on Android device/emulator" link. (You can also type the letter a in your bash terminal session where you started expo to achieve the same result.)

4. The first time you do this, Expo will automatically install itself on your virtual device. You should see logs to the console in the Expo DevTools page in your browser that say "Downloading latest version of Expo", then "Installing Expo on device", then "Opening on Android device". This can take a while the first time, sit tight.

5. At this last part when you see "Opening on Android device", you should see a dialog pop up on your emulator asking you to enable "Permit drawing over other apps". Click OK, enable the setting, then use the Back triangle at the bottom left of the device screen (not the one on the upper left) to return to the Expo install. You will see a white screen and the words "Building JavaScript bundle" for a while as it installs. Eventually, the React Native app should load, and you are done! You should see the words "Open up App.js to start working on your app!" on the emulator screen. 

You may see a message that says "Hello there friend!" then informs you about a menu that you can open with Cmd/Ctrl + M. If you see this, you can close out of this menu (with the X at the upper right). We will discuss this (the Expo Developer Menu) at a later time. 

Note: If you have any strange issues at this step, before anything else, please try closing everything and rebooting your computer. Then open Android Studio > AVD Manager, start your emulator again, and continue. 



OPTIONAL: Running your application on a mobile device
While you are welcome to follow the instructions below to test our your application on your personal mobile device, unfortunately this will not be supported by Nucamp due to the many differences in mobile devices. If you have issues installing the emulator, try this as an alternative. (Or, if you are so inclined, just try it for fun!)
Install the Expo client app on your iOS or Android phone. Download for Android from the Play Store or for iOS from the App Store. The Android app requires Android 5.0 and up. The iOS app requires iOS 10.0 or later.
Connect your phone to the same wireless network as your computer.
After you have started your Expo app on your computer: On Android, use the Expo app to scan the QR code in your computer's terminal or browser. On iOS, follow on-screen instructions to get a link. This will connect your phone to your computer so that you can test your React Native app. 

Summary
In this lesson, you installed Android Studio and the Android SDK, set up an Android emulator/AVD, and used the Expo CLI and Expo DevTools to open your React Native project and load it onto your AVD. 



Additional Resources

Android Studio
Android Studio - Managing AVDs
Android Emulator - AMD Processor & HyperV Support (Windows HyperVisor)
Expo - Android Studio Emulator
macOS - Nano Text Editor Guide