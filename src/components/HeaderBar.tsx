import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY} from '../theme/theme';

const HeaderBar = ({navigation}: any) => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/image.png')} style={styles.logo} />
      <View style={styles.authButtons}>
        <TouchableOpacity
          onPress={() => {
            navigation.reset(
              {
                index: 0,
                routes: [{name: 'LoginScreen'}],
              },
              ToastAndroid.showWithGravityAndOffset(
                'Logout Successfull',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                0,
                50,
              ),
            );
          }}>
          <Text style={styles.signupButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  signupButton: {
    padding: 8,
    borderRadius: 5,
    color: COLORS.primaryBlackHex,
    fontWeight: 'bold',
    fontFamily: FONTFAMILY.poppins_bold,
  },
  authButtons: {
    flexDirection: 'row',
    gap: 10,
  },
});
