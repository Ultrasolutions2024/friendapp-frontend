import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    {id: '1', title: 'Coins', amount: '$45.00', date: '2024-11-25'},
    {
      id: '2',
      title: 'Premium subscription',
      amount: '$1000.00',
      date: '2024-11-20',
    },
    {id: '3', title: 'Online calls', amount: '$120.00', date: '2024-11-15'},
  ]);


  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://via.placeholder.com/500x800/fa28e5/fa28e5?text=Gradient+Background',
      }} // You can replace this with your gradient background image
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Recent Transactions</Text>

        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.transactionCard}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent overlay for better text visibility
    padding: 26,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#ff1dff',
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff1dff',
    marginBottom: 8,
  },
  transactionAmount: {
    fontSize: 16,
    color: '#FF3B96',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: '#777777',
  },
});
