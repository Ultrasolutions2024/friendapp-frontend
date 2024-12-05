import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Warnings = () => {
  // Example data for warnings
  const warningsData = [
    {
      id: '1',
      reason: 'Inappropriate language in a comment',
      date: '2024-11-28',
    },
    {id: '2', reason: 'Violation of community guidelines', date: '2024-11-15'},
    {id: '3', reason: 'Spamming in the forum', date: '2024-11-01'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Warnings</Text>
      <Text style={styles.subTitle}>
        You have received {warningsData.length} warning(s) so far:
      </Text>

      <FlatList
        data={warningsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.warningCard}>
            <Text style={styles.warningReason}>⚠️ {item.reason}</Text>
            <Text style={styles.warningDate}>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Warnings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#FF3B3B', // Warning red color
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333333',
  },
  warningCard: {
    backgroundColor: '#FFF3F3',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFD2D2',
  },
  warningReason: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D9534F', // Darker red for the reason text
  },
  warningDate: {
    fontSize: 14,
    color: '#555555',
    marginTop: 4,
  },
});
