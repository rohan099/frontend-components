/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Add, Multiply } from 'services';
import { Button, BlueButton, RedButton,GradientButton } from 'uin';
import { Box } from '@reusejs/react-native-component-template';
import LinearGradient from 'react-native-linear-gradient'

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={
          {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5
          }}
      >
        <Text style={{
          fontSize: 18,
          fontFamily: 'Gill Sans',
          textAlign: 'center',
          margin: 10,
          color: '#ffffff',
          backgroundColor: 'transparent',
        }}>
          Sign in with Facebook
        </Text>
      </LinearGradient>

    </View>
  );
};

const App: () => Node = () => {
  console.log('Add - ', Add(2, 3), Multiply(2, 3));

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <BlueButton title="My Blue Button" />
          <RedButton title="MY red Button" />
          <View style={{marginHorizontal:20}}>
          <LinearGradient
          start={{x: 1, y: 0}} end={{x: 0, y: 0}} 
            colors={[ '#3F76FF', '#003AC9']}
            style={
              {
                flex: 1,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 16
              }}
          >
            <Text style={{
              fontSize: 18,
              fontFamily: 'Open Sans Bold',
              textAlign: 'center',
              margin: 10,
              color: '#ffffff',
              backgroundColor: 'transparent',
            }}>
              Get Started
            </Text>
          </LinearGradient>
          </View>
          <View style={{marginHorizontal:20, marginTop:10}}>
          <LinearGradient
          start={{x: 1, y: 0}} end={{x: 0, y: 0}} 
            colors={[ '#FF5500', '#FF7954']}
            style={
              {
                flex: 1,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 16
              }}
          >
            <Text style={{
              fontSize: 18,
              fontFamily: 'Open Sans Bold',
              textAlign: 'center',
              margin: 10,
              color: '#ffffff',
              backgroundColor: 'transparent',
            }}>
             Open Email
            </Text>
          </LinearGradient>
          </View>
          <GradientButton style={{margin:20}} title="Hello" colors={[ '#FF5500', '#FF7954']}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
