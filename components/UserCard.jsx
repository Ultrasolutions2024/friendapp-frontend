// UserCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { icons } from '../constants';

const UserCard = ({ card }) => {
  return (
    <View style={styles.verticalCard}>
      <Image source={card.imageUrl} style={styles.verticalImage} />
      <View style={styles.cardContent}>
        <View style={styles.userInfo}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <View style={styles.onlineIndicator} />
          <Image source={icons.verify} style={styles.verifyIcon} />
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.cardLanguages}>{card.languages.join(', ')}</Text>
          <TouchableOpacity style={styles.speakerButton}>
            <Text style={styles.speakerButtonText}>🔊</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.8</Text>
          <Image source={icons.star} style={styles.star} />
        </View>
      </View>
      <TouchableOpacity style={styles.callButtonC}>
        <Image source={icons.call} style={styles.callButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f5e3f6',
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#FF3B96',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  verticalImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginLeft: 8,
  },
  verifyIcon: {
    width: 20,
    height: 20,
    marginLeft: 6, // Adjust spacing as needed
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  cardLanguages: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#999',
  },
  speakerButton: {
    marginLeft: 4,
  },
  speakerButtonText: {
    fontSize: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  ratingText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginRight: 4,
    marginTop: 4,
  },
  star: {
    width: 20,
    height: 20,
  },
  callButtonC: {
    backgroundColor: '#FF3B96',
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 20,
    shadowColor: '#FF3B96',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  callButton: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
});

export default UserCard;
