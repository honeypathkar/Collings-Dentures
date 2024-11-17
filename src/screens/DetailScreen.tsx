import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {BORDERRADIUS, COLORS, FONTSIZE} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';

const DetailScreen = ({navigation, route}: any) => {
  const {name, width, height, imageLink, vendor, shape, color} = route.params;

  return (
    <View style={styles.mainContainer}>
      <HeaderBar navigation={navigation} />
      <ScrollView style={styles.ScrollViewFlex}>
        <View style={styles.innerViewContainer}>
          <Text style={styles.Title}>{name}</Text>
          <Image source={{uri: imageLink}} style={styles.Image} />
          <Text style={styles.subtitle}>Width: {width}</Text>
          <Text style={styles.subtitle}>Height: {height}</Text>
          <Text style={styles.subtitle}>
            Vendor:{' '}
            {vendor.charAt(0).toUpperCase() +
              vendor.slice(1).replace(/([A-Z])/g, ' $1')}
          </Text>
          {/* Fixed the shape condition */}
          {shape && (
            <Text style={styles.subtitle}>
              Shape: {shape.charAt(0).toUpperCase() + shape.slice(1)}
            </Text>
          )}
          {color && (
            <Text style={styles.subtitle}>
              Color:{' '}
              {color.charAt(0).toUpperCase() +
                color.slice(1).replace(/([A-Z])/g, ' $1')}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryDiamondHex,
  },
  Title: {
    fontSize: FONTSIZE.size_28,
    fontWeight: 'bold',
  },
  Image: {
    height: 90,
    marginTop: 10,
    marginBottom: 10,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  innerViewContainer: {
    padding: 20,
    backgroundColor: COLORS.primaryWhiteHex,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 1,
    borderColor: COLORS.primaryBlackHex,
  },
  subtitle: {
    color: 'black',
    fontSize: FONTSIZE.size_20,
  },
});
