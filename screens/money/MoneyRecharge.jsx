import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '../../constants'; // Importing bg image from constants
import { Picker } from '@react-native-picker/picker'; // For the dropdown
import { Image } from 'react-native';

const MoneyRecharge = () => {
  const [coins, setCoins] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Google Pay');

  const coinToRupees = coins ? (parseFloat(coins) * 1.5).toFixed(2) : '0.00';

  return (
    <ImageBackground source={images.bg} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Add Coins to Wallet</Text>
        <Text style={styles.subHeading}>Promise of Real</Text>
        <Text style={styles.appName}>Chingu</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Coins</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="0"
            value={coins}
            onChangeText={(value) => setCoins(value)}
          />
          <Text style={styles.rupeesText}>Rupees: ₹{coinToRupees}</Text>
        </View>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Payment Method</Text>
          <Picker
            selectedValue={selectedPaymentMethod}
            onValueChange={(itemValue) => setSelectedPaymentMethod(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Google Pay" value="Google Pay" />
            <Picker.Item label="PayPal" value="PayPal" />
            <Picker.Item label="Credit Card" value="Credit Card" />
          </Picker>
        </View>

        <View style={styles.paymentInfoContainer}>
          <Text style={styles.paymentInfoText}>Audio Call  <Image source={icons.coin} style={styles.coinIcon} /> 10/min</Text>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay on App</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.morePackagesButton}>
            <Text style={styles.morePackagesText}>More Packages</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MoneyRecharge;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
  },
  subHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
  },
  coinIcon: {
    width:20,
    height: 20,
  },
  input: {
    height: 50,
    borderColor: '#FF3B96',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent background
  },
  rupeesText: {
    fontFamily: 'Poppins-Bold', // Increased emphasis
    fontSize: 24, // Slightly larger
    color: '#fff',
    marginTop: 10,
  },
  dropdownContainer: {
    width: '100%',
    marginBottom: 30,
    borderRadius:20,
  },
  picker: {
    height: 50,
    borderColor: '#FF3B96',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  paymentInfoContainer: {
    width: '100%',
    alignItems: 'center',
    position:'fixed',
    bottom:-60,
  },
  paymentInfoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  payButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF3B96',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  payButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
  },
  morePackagesButton: {
    width: '70%',
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  morePackagesText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#FF3B96',
  },
});
