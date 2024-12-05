import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { icons, images } from '../../constants';

const CallScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('all'); // State to manage the selected filter

  // Sample data for call history with call duration and caller information
  const callHistoryData = [
    {
      id: 1,
      title: 'John Doe',
      imageUrl: images.profile,
      duration: '12 min',
      callType: 'missed',
    },
    {
      id: 2,
      title: 'Emma Watson',
      imageUrl: images.profile,
      duration: '5 min',
      callType: 'outgoing',
    },
    {
      id: 3,
      title: 'Michael Smith',
      imageUrl: images.profile,
      duration: '7 min',
      callType: 'received',
    },
    {
      id: 4,
      title: 'Sarah Connor',
      imageUrl: images.profile,
      duration: '8 min',
      callType: 'received',
    },
    {
      id: 5,
      title: 'Tom Hardy',
      imageUrl: images.profile,
      duration: '15 min',
      callType: 'outgoing',
    },
    {
      id: 6,
      title: 'Jessica Jones',
      imageUrl: images.profile,
      duration: '3 min',
      callType: 'missed',
    },
    {
      id: 7,
      title: 'Bruce Wayne',
      imageUrl: images.profile,
      duration: '9 min',
      callType: 'received',
    },
    {
      id: 8,
      title: 'Clark Kent',
      imageUrl: images.profile,
      duration: '11 min',
      callType: 'outgoing',
    },
    {
      id: 9,
      title: 'Peter Parker',
      imageUrl: images.profile,
      duration: '6 min',
      callType: 'received',
    },
    {
      id: 10,
      title: 'Wade Wilson',
      imageUrl: images.profile,
      duration: '4 min',
      callType: 'missed',
    },
  ];

  // Filter the call history based on the selected filter
  const filteredCallHistory = callHistoryData.filter((card) => {
    return selectedFilter === 'all' || card.callType === selectedFilter;
  });

  return (
    <ImageBackground source={images.bg} style={styles.background}>
      <Text style={styles.heading}>History</Text>
      <View style={styles.genderTabs}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedFilter === 'all' && styles.activeGenderButton,
          ]}
          onPress={() => setSelectedFilter('all')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedFilter === 'all' && styles.activeGenderButtonText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedFilter === 'missed' && styles.activeGenderButton,
          ]}
          onPress={() => setSelectedFilter('missed')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedFilter === 'missed' && styles.activeGenderButtonText,
            ]}
          >
            Missed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedFilter === 'outgoing' && styles.activeGenderButton,
          ]}
          onPress={() => setSelectedFilter('outgoing')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedFilter === 'outgoing' && styles.activeGenderButtonText,
            ]}
          >
            Outgoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedFilter === 'received' && styles.activeGenderButton,
          ]}
          onPress={() => setSelectedFilter('received')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedFilter === 'received' && styles.activeGenderButtonText,
            ]}
          >
            Received
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {filteredCallHistory.map((card) => (
          <View key={card.id} style={styles.verticalCard}>
            <Image source={card.imageUrl} style={styles.verticalImage} />
            <View style={styles.cardContent}>
              <View style={styles.userInfo}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <View style={styles.onlineIndicator} />
              </View>
              <View style={styles.callInfoContainer}>
                <Text style={styles.callDuration}>{card.duration}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.callButtonC}>
              <View style={styles.callInfoContainer}>
                {card.callType === 'missed' && (
                  <Image source={icons.missed} style={styles.callIconm} />
                )}
                {card.callType === 'outgoing' && (
                  <Image source={icons.outgoing} style={styles.callIcono} />
                )}
                {card.callType === 'received' && (
                  <Image source={icons.incomming} style={styles.callIconi} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  genderTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    position: 'fixed',
    top: 10,
  },
  genderButton: {
    flex: 1, // Use flex to equally divide the space
    paddingVertical: 10, // Equal vertical padding for size consistency
    marginHorizontal: 5, // Margin to create space between buttons
    borderRadius: 5,
    backgroundColor: '#FF3B96',
    alignItems: 'center',
  },
  activeGenderButton: {
    backgroundColor: '#d70862', // Color for active buttons
  },
  genderButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  activeGenderButtonText: {
    color: '#fff', // Text color for active buttons
  },
  verticalCard: {
    backgroundColor: '#F4F4FB',
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f5e3f6',
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#FF3B96',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 11,
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins-Bold',
    color: '#FF3B96',
    position: 'fixed',
    top: 15,
  },
  verticalImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 16,
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
  callInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  callDuration: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    marginRight: 8,
  },
  callIconm: {
    width: 22,
    height: 22,
    marginLeft: 4,
  },
  callIcono: {
    width: 22,
    height: 22,
    marginLeft: 4,
  },
  callIconi: {
    width: 22,
    height: 22,
    marginLeft: 4,
  },
  callButtonC: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    shadowColor: '#BB9CEF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    elevation: 20,
  },
});

export default CallScreen;
