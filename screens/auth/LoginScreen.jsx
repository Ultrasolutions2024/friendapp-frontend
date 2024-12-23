import React, {useState, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {images} from '../../constants';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {Otpsend, OtpVerify} from '../../store/user/userSlice';
const {height, width} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const inputs = useRef([]);
  const [phoneNumber, setphoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const dispatch = useDispatch();
  const handleSendOtp = async () => {
    if (phoneNumber.length === 10) {
      try {
        await AsyncStorage.setItem('phoneNumber', phoneNumber);
        setIsOtpSent(true);
        dispatch(Otpsend({phoneNumber}));
      } catch (error) {
        console.error('Error saving phone number:', error);
      }
    } else {
      Alert.alert(
        'Invalid Mobile Number',
        'Please enter a valid 10-digit mobile number.',
      );
    }
  };

const handleVerifyOtp = async () => {
  try {
    const phoneNumbers = await AsyncStorage.getItem('phoneNumber');
    const formattedPhoneNumber = `+91${phoneNumbers}`;
    console.log(phoneNumber, otp);

    const result = await dispatch(
      OtpVerify({otp, phoneNumber: formattedPhoneNumber}),
    );

    if (OtpVerify.fulfilled.match(result)) {
      const {register} = result.payload;

      if (register) {
        console.log('OTP verified successfully. You can now register.');
        navigation.reset({
          index: 0,
          routes: [{name: 'UserDetails'}],
        });
      } else {
        console.log('OTP verified successfully. You can now log in.');
        navigation.navigate('Tab');
      }
    } else {
      console.log(
        'Error',
        'OTP verification failed. Please try again.',
        'error',
      );
    }
  } catch (error) {
    console.error('Error retrieving phone number:', error);
    console.log('Error', 'Something went wrong. Please try again.', 'error');
  }
};



  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.topSection}>
        <Text style={styles.appName}>Chingu</Text>
        <Text style={styles.description}>100 % Safe and Secure</Text>
        <Text style={styles.description2}>Zero Fake Profiles</Text>
        <Image source={images.bg4} style={styles.image} />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.footerText}>Login with your Mobile Number</Text>
        {!isOtpSent ? (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChangeText={setphoneNumber}
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={10}
            />
            <TouchableOpacity style={styles.checkboxWrapper}>
              <BouncyCheckbox
                isChecked={isAgreed}
                onPress={() => setIsAgreed(!isAgreed)}
                text="I agree to the terms and conditions"
                textStyle={{textDecorationLine: 'none'}}
                fillColor="#FF3B96"
                style={styles.checkbox}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSendOtp}
              disabled={!isAgreed}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.otpPrompt}>Enter OTP</Text>
            <View style={styles.otpContainer}>
              {Array(4)
                .fill()
                .map((_, index) => (
                  <TextInput
                    key={index}
                    placeholder=""
                    value={otp[index] || ''}
                    onChangeText={text => {
                      const newOtp = otp.split('');
                      newOtp[index] = text;
                      setOtp(newOtp.join(''));

                      if (text.length === 1 && index < 3) {
                        inputs.current[index + 1]?.focus();
                      }
                      if (text.length === 0 && index > 0) {
                        inputs.current[index - 1]?.focus();
                      }
                    }}
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={el => (inputs.current[index] = el)}
                  />
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
              <Text style={styles.buttonText}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.disclaimerText}>
          By proceeding, you accept the user policy & terms and conditions.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BEFFF',
  },
  topSection: {
    height: height * 0.6,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  appName: {
    fontSize: 64,
    color: '#BB9CEF',
    fontFamily: 'Dansing-Script',
    fontWeight: '600',
  },
  description: {
    fontSize: 20,
    marginTop: 35,
    color: 'gray',
    fontFamily: 'Poppins-Regular',
  },

  description2: {
    fontSize: 17,
    color: 'gray',
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: width * 0.7,
    height: 400,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: height * 0.26,
  },
  bottomSection: {
    height: height * 0.4,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: -20,
  },
  footerText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxWrapper: {
    alignItems: 'center', // Center horizontally
    width: '80%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
    fontSize: 16,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF3B96',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
  otpPrompt: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  disclaimerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999',
    marginTop: 15,
    fontFamily: 'Poppins-Light',
  },
});

export default LoginScreen;
