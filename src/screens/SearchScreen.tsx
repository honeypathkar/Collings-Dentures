import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBar from '../components/HeaderBar';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import FilterForm from '../components/FilterForm';

const SearchScreen = ({navigation, route}: any) => {
  return (
    <View style={styles.MainContainer}>
      <HeaderBar navigation={navigation} />
      <ScrollView style={styles.ScrollViewFlex}>
        <View style={styles.HeaderBarText}>
          <Text style={styles.title}>All Items</Text>
          <Text style={styles.subTitle}>Discover Top Searches Here</Text>
        </View>
        <FilterForm route={route} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryDiamondHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderBarText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryBlackHex,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subTitle: {
    marginTop: 10,
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_light,
    marginBottom: 10,
  },
});
