import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {FONTFAMILY} from '../theme/theme';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading

  // Handle login and delay navigation
  const handleLogin = () => {
    setLoading(true); // Start loading animation

    // Simulate a delay (2 seconds) before navigating
    setTimeout(() => {
      setLoading(false); // Stop loading animation

      // Show a toast notification with the user's email
      ToastAndroid.showWithGravityAndOffset(
        `Welcome, ${email}!`, // Message
        ToastAndroid.LONG, // Duration
        ToastAndroid.BOTTOM, // Position
        0, // X offset
        50, // Y offset
      );

      navigation.replace('HomeScreen'); // Navigate after delay
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image.png')} />
      <Text style={styles.title}>Signin with Email</Text>
      <Text style={styles.subtitle}>
        Find the perfect tooth, fast and precise.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)); // Simple email validation
        }}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: isValid ? '#007bff' : '#aaa'}]}
        disabled={!isValid || loading} // Disable button if loading
        onPress={handleLogin}>
        {loading ? (
          // Show loading indicator when `loading` state is true
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Get Started</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: FONTFAMILY.poppins_bold,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
