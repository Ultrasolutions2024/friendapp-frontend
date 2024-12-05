import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Importing bg image from constants

const WalletScreen = () => {
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  // Dummy transactions to initialize the transaction history
  useEffect(() => {
    const initialTransactions = [
      { id: 1, amount: 100 },
      { id: 2, amount: 250 },
      { id: 3, amount: 75 },
    ];
    setTransactions(initialTransactions);
  }, []);

  const addMoney = () => {
    if (amount) {
      setTransactions([...transactions, { id: transactions.length + 1, amount: parseFloat(amount) }]);
      setAmount('');
    }
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>Added: ₹{item.amount}</Text>
    </View>
  );

  return (
    <ImageBackground source={images.bg} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Wallet</Text>
        <Text style={styles.subHeading}>Manage your funds</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Add Money</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
            value={amount}
            onChangeText={(value) => setAmount(value)}
          />
          <TouchableOpacity style={styles.addButton} onPress={addMoney}>
            <Text style={styles.addButtonText}>Add Money</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.historyHeading}>Transaction History</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.transactionList}
        />

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All Transactions</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust the background image to cover the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 38,
    color: '#fff',
    marginBottom: 5,
  },
  subHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#fff',
    marginBottom: 5,
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
  addButton: {
    height: 50,
    backgroundColor: '#FF3B96',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  addButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
  },
  historyHeading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  transactionList: {
    width: '100%',
    paddingBottom: 10,
  },
  transactionItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly transparent background for transaction items
    padding: 15,
    paddingHorizontal:90,
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
  viewAllButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom:10,
  },
  viewAllButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#FF3B96',
  },
});
