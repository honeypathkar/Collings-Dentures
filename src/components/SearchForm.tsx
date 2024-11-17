import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTFAMILY} from '../theme/theme';

export default function SearchForm({navigation}: any) {
  const [massValue, setMassValue] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  // Check if any field is filled
  const isFormValid = width || height || massValue;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find best smile</Text>

      <Text style={styles.label}>Tooth size</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        keyboardType="numeric"
        value={massValue}
        onChangeText={setMassValue}
      />
      <View style={styles.SizeContainer}>
        <TextInput
          style={styles.inputWidth}
          placeholder="Width"
          keyboardType="numeric"
          value={width}
          onChangeText={setWidth}
        />
        <TextInput
          style={styles.inputHeight}
          placeholder="Height"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.searchButton,
          {backgroundColor: isFormValid ? '#007bff' : '#ccc'},
        ]}
        onPress={() => {
          if (isFormValid) {
            // Send the data to the SearchScreen
            navigation.push('SearchScreen', {
              width,
              height,
              massValue,
            });
          }
        }}
        disabled={!isFormValid}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primaryBlackHex,
    fontFamily: FONTFAMILY.poppins_extrabold,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  SizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 50,
    gap: 10,
  },
  inputWidth: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    width: '70%',
  },
  inputHeight: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    width: '70%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    width: '100%',
  },
  searchButton: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 140,
    marginTop: 20,
  },
  searchButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
