import { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { subscribe } from '../lib/mediator';

export default function ImageViewer({ placeholderImageSource }) {
  const [selectedImage, setSelectedImage] = useState(placeholderImageSource);

  useEffect(() => {
    subscribe('change_image', 'change_image', args => {
      setSelectedImage(args.selectedImage);
    });
  }, []);

  return (
    <Image source={selectedImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});