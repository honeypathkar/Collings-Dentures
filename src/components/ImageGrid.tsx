import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View, Image} from 'react-native';

const ImageGrid = () => {
  // Define animated values for opacity and translateY
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity = 0
  const slideAnim = useRef(new Animated.Value(30)).current; // Initial position (slide from below)

  useEffect(() => {
    // Trigger both animations when the component mounts
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade to full opacity
      duration: 1500, // Duration of fade-in
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0, // Slide to the original position
      duration: 1500, // Duration of slide
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.imageGrid}>
      <Animated.Image
        source={require('../assets/image1.png')}
        style={[
          styles.gridImage,
          {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
        ]}
      />
      <Animated.Image
        source={require('../assets/image2.png')}
        style={[
          styles.gridImage,
          {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
        ]}
      />
      <Animated.Image
        source={require('../assets/image3.png')}
        style={[
          styles.gridImage,
          {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
        ]}
      />
      <Animated.Image
        source={require('../assets/image4.png')}
        style={[
          styles.gridImage,
          {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
        ]}
      />
      <Animated.Image
        source={require('../assets/image5.png')}
        style={[
          styles.gridImage,
          {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
        ]}
      />
      <Animated.Image
        source={require('../assets/image6.png')}
        style={[
          styles.gridImage,
          {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
        ]}
      />
    </View>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  gridImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
});
