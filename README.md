# authentication

This is a simple authentication project built with react-native targetting android and IOS both. It uses Parse as its backend.

========= Tools used =========

1. Github repository. 
2. React-native
3. Xcode
4. Sublime editor

========= Device Support =========

This application works well on iOS platform.

### Tools used for back-end integration
* https://github.com/ParsePlatform/ParseReact
* https://parse.com/docs/js/guide#users
* npm install --save parse parse-react
parse is for fetch data from back-end.
parse-react is glue between parse and react app, and reads data parse fetched above.

### Tools used for android: 
* Genymotion, VirtualBox (dependancy of Genymotion), 
* Android-SDK (the build tool). The android build tool 23.0.1 required for running on Google Nexus 5X-6.9.9 - API 23 - 1080*1920

###  To launch the app for android:
* Run genymotion -> hit start for the device to be tested
* on command prompt for project -> react-native start
* to deploy the project on device in genymotion -> react-native run-android

### Tools used for android: 
* Xcode - iPhone 6s Puls (9.1)

###  To launch the app for iphone simulator:
* Open the project in Xcode
* click on launch in the toolbar
* to launch chrome debugger - press cmd + D

### The difference between Genymotion and Xcode simulator for refresh JS:
Xcode - cmd + R
genymotion - click on menu button -> reload JS


