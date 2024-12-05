import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={images.bg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={images.bg}
          style={styles.profileBackground}
          blurRadius={10}>
          <View style={styles.profileContainer}>
            <View style={styles.profilepicCard}>
              <Image source={images.profile} style={styles.profileImage} />
              <Text style={styles.profileName}>Robert Downey Junior</Text>
              <Text style={styles.location}>New York, USA</Text>
            </View>
            <View style={styles.profileDetails}>
              <View style={styles.followContainer}>
                <View style={styles.followBox}>
                  <Text style={styles.followNumber}>120</Text>
                  <Text style={styles.followLabel}>Followers</Text>
                </View>
                <View style={styles.followBox}>
                  <Text style={styles.followNumber}>80</Text>
                  <Text style={styles.followLabel}>Following</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <Image source={images.profilesub} style={styles.bannerImage} />

        <View style={styles.listBackground}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.cardContent}>
              <Image source={images.profile} style={styles.cardIcon1} />
              <Text style={styles.cardLabel}>Edit Profile</Text>
            </View>
            <Image source={icons.rightArrow2} style={styles.goIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('WalletScreen')}>
            <View style={styles.cardContent}>
              <Image source={icons.wallet} style={styles.cardIcon} />
              <Text style={styles.cardLabel}>Wallet</Text>
            </View>
            <Image source={icons.rightArrow2} style={styles.goIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Spin')}>
            <View style={styles.cardContent}>
              <Image source={icons.wheel} style={styles.cardIcon3} />
              <Text style={styles.cardLabel}>Spin a Game</Text>
            </View>
            <Image source={icons.rightArrow2} style={styles.goIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Recharge')}>
            <View style={styles.cardContent}>
              <Image source={icons.rps} style={styles.cardIcon} />
              <Text style={styles.cardLabel}>Add Coins</Text>
            </View>
            <Image source={icons.rightArrow2} style={styles.goIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: width * 0.05, // Responsive padding
  },
  profileBackground: {
    borderRadius: 15,
    padding: width * 0.05, // Responsive padding
    marginTop: 50,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between elements
  },
  profileImage: {
    width: width * 0.25, // Responsive width
    height: width * 0.25, // Responsive height
    borderRadius: width * 0.125, // Half of the width for circular shape
  },
  profileDetails: {
    marginLeft: width * 0.010, // Responsive margin
  },
  profileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  location: {
    fontFamily: 'Poppins-Regular',
    fontSize:13,
    color: '#fff',
  },
  followContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  followBox: {
    marginRight: 10,
    alignItems: 'center',
    width: width * 0.20, // Responsive width
  },
  followNumber: {
    fontFamily: 'Poppins-SemiBold',
    fontSize:22, // Responsive font size
    color: '#fff',
  },
  followLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize:16, // Responsive font size
    color: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: height * 0.3, // Responsive height based on screen height
    marginVertical: height * 0.001, // Responsive margin
    borderRadius: 10,
  },
  listBackground: {
    borderRadius: 10,
    padding: 15,
    marginTop:-25,

  },
  card: {
    backgroundColor: '#3BEFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
    tintColor:'#FF3B96',
  },
  cardIcon3: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  cardIcon1: {
    width: 25,
    height: 25,
    marginRight: 15,
    borderRadius: 50,
  },
  cardLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17, // Responsive font size
    color: '#FF3B96',
  },
  goIcon: {
    width: 20,
    height: 20,
    tintColor:'#FF3B96',
  },
});
