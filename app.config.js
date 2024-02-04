export default {
  expo: {
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            buildToolsVersion: '34.0.0'
          },
          ios: {
            deploymentTarget: '17.0'
          }
        }
      ]
    ]
  }
}
