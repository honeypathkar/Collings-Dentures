import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import {COLORS, FONTFAMILY} from '../theme/theme';
import ImageGrid from '../components/ImageGrid';
import SearchForm from '../components/SearchForm';

const HomeScreen = ({navigation}: any) => {
  // Define animated values for opacity and translation
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity = 0
  const slideAnim = useRef(new Animated.Value(30)).current; // Initial position (slide from below)

  useEffect(() => {
    // Trigger animation when screen is loaded
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
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'black'} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <HeaderBar navigation={navigation} />

        {/* Animated Text Section */}
        <View style={styles.textSection}>
          <Animated.Text
            style={[
              styles.title1,
              {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
            ]}>
            Discover the Best Fit,
          </Animated.Text>
          <Animated.Text
            style={[
              styles.title2,
              {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
            ]}>
            Driven By AI Intelligence
          </Animated.Text>
        </View>

        {/* Image Grid */}
        <ImageGrid />

        {/* Search Form */}
        <View style={{marginVertical: 30, marginHorizontal: 10}}>
          <SearchForm navigation={navigation} />
        </View>

        {/* Footer Image */}
        <View style={styles.footer}>
          <Image
            source={require('../assets/group.png')}
            style={{width: 300, height: 20}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primaryDiamondHex,
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  textSection: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: FONTFAMILY.poppins_regular,
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: FONTFAMILY.poppins_regular,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default HomeScreen;
