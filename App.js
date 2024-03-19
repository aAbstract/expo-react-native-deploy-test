import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import * as Updates from 'expo-updates';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const placeHolderImage = require('./assets/images/background-image.png');

async function onFetchUpdateAsync() {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  } catch (error) {
    // You can also add an alert() here if needed for your purposes
    console.log(`Error fetching latest Expo update: ${error}`);
  }
}

export default function App() {
  useEffect(() => { onFetchUpdateAsync() }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeHolderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo P1 Update" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
