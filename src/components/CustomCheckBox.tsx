import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CustomCheckBox = ({isChecked, onPress, title}: any) => {
  return (
    <View style={styles.checkboxContainer}>
      <BouncyCheckbox
        isChecked={isChecked}
        onPress={onPress}
        fillColor="blue"
        text={title}
        textStyle={{textDecorationLine: 'none'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default CustomCheckBox;
