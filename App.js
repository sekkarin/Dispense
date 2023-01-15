import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
// import * as React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { LinearGradient } from 'expo-linear-gradient';
// function HomeScreen() {
//   return (
//     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       <View style={styles.container}>
//         <LinearGradient
//           // Background Linear Gradient
//           colors={['rgba(0,0,0,0.8)', 'transparent']}
//           style={styles.background}
//         />
//         <LinearGradient
//           // Button Linear Gradient
//           colors={['#4c669f', '#3b5998', '#192f6a']}
//           style={styles.button}>
//           <Text style={styles.text}>Sign in with Facebook</Text>
//           <Text style={styles.text}>Edite fromn ken</Text>
//           <Text style={styles.text}>add frpm pat</Text>
//           <Text style={styles.text}>asdasdasdasd</Text>
//         </LinearGradient>
//       </View>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
// var styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5
//   },
//   buttonText: {
//     fontSize: 18,
//     fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// });