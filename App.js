/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import Logo from './src/assets/logo.png';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={(backgroundStyle, styles.screenContainer)}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={(backgroundStyle, styles.innerScreeenContainer)}
        contentContainerStyle={{
          height: '100%',
        }}>
        {/* <View style={styles.nameCon}></View> */}
        <View style={styles.menuCon}>
          <View style={styles.labelCon}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Main</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.labelText}>Gen</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.labelText}>Inv</Text>
            </View>
          </View>
          <View style={styles.valueCon}>
            <Text style={styles.value}>12V</Text>
            <Text style={styles.value}>30V</Text>
            <Text style={styles.value}>15V</Text>
          </View>
        </View>
        <View style={styles.bigDisplayCon}>
          <Text style={styles.bigDisplayText}>Out:100w</Text>
        </View>
        <View style={styles.menuCon}>
          <View style={styles.labelCon}>
            <View style={styles.label}>
              <Text style={styles.labelText}>MODE</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.labelText}>Bat V</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.labelText}>Gen V</Text>
            </View>
          </View>
          <View style={styles.valueCon}>
            <Text style={styles.value}>12V</Text>
            <Text style={styles.value}>30V</Text>
            <Text style={styles.value}>15V</Text>
          </View>
        </View>
        <View style={styles.bigButton}>
          <Text style={styles.buttonText}>Auto/Manual</Text>
        </View>
        <View style={styles.smallButtonCon}>
          <View style={styles.smallButton}>
            <Text style={styles.buttonText}>Main</Text>
          </View>
          <View style={styles.smallButton}>
            <Text style={styles.buttonText}>Inv</Text>
          </View>
        </View>
        <View style={styles.smallButtonCon}>
          <View style={styles.smallButton}>
            <Text style={styles.buttonText}>Gen</Text>
          </View>
          <View style={styles.smallButton}>
            <Text style={styles.buttonText}>Idle</Text>
          </View>
        </View>
        <View style={styles.bigButton}>
          <Text style={styles.buttonText}>Shutdown</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <Text style={styles.test}>Hey!</Text>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  innerScreeenContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  innerContainer: {
    width: '100%',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameCon: {
    height: 50,
    width: '100%',
  },
  menuCon: {
    height: 70,
    width: '100%',
    marginBottom: 30,
  },
  labelCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  valueCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  label: {
    height: 40,
    width: '30%',
    borderRadius: 5,
    backgroundColor: '#12B293',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  value: {
    fontSize: 25,
    color: '#4AD395',
    fontWeight: '600'
  },
  bigDisplayCon: {
    height: 170,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#E7F7F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  bigDisplayText: {
    fontSize: 50,
    fontWeight: '600',
    color: '#12B293',
  },
  bigButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#12B293',
    marginBottom: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
  },
  smallButtonCon: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  smallButton: {
    backgroundColor: '#12B293',
    width: '45%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
