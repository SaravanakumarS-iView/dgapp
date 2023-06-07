# dgapp

# For IOS build:
   * We need to configure the developer account in xcode.
   * Select any iOS device and clean the build folder.
   * Generate the build using Archive option in Xcode product menu.
   * Get the ipa file while distribute app, otherwise after distrbution success we can get that from test flight.

# For Android release build:
   * We need key store file to generate the release build.
   * Need to configure this with build.gradle file.
   * Release build command : gradlew bundleRelease.
   * Generate the keystore file using the below command.
       keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
    
__FYI, As of now we are storing the JSON in service folder based on the pagination index we will dynamcally import the json and displayed the results. In future if we need it from the api we can replace with dynamic import with actual API.__