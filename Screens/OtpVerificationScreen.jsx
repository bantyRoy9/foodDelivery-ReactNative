
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Animated } from 'react-native';
// import { Input } from 'react-native-elements';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import NumericInput from 'react-native-numeric-input';

const OtpVerificationScreen = () => {
  const [otp, setOTP] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [animation] = useState(new Animated.Value(0));

  const handleVerification = () => {
    if (otp === verificationCode) {
      Alert.alert('Success', 'Verification successful!');
    } else {
      Animated.sequence([
        Animated.timing(animation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(animation, { toValue: -10, duration: 100, useNativeDriver: true }),
        Animated.timing(animation, { toValue: 0, duration: 100, useNativeDriver: true }),
      ]).start();
      Alert.alert('Error', 'Invalid verification code!');
    }
  };

  const animatedStyle = {
    transform: [{ translateX: animation }]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <View style={styles.otpContainer}>
        <OTPInputView
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.otpInput}
          onCodeChanged={code => setOTP(code)}
        />
        {/* <OTPInputView /> */}
      </View>
      <View style={styles.codeContainer}>
        <Text style={styles.codeLabel}>Verification Code:</Text>
        <NumericInput
          value={verificationCode}
          onChange={value => setVerificationCode(value)}
          totalWidth={150}
          totalHeight={40}
          iconSize={25}
          step={1}
          minValue={1000}
          maxValue={9999}
          valueType="integer"
          rounded
          textColor="#000"
          iconStyle={{ color: 'white' }}
          containerStyle={styles.codeInput}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerification}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Animated.Text style={[styles.errorText, animatedStyle]}>Invalid verification code!</Animated.Text>
    </View>
  );
}

export default OtpVerificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    marginBottom: 20,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    fontSize: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  codeLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
