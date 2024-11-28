// Updated Home.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {images, icons} from '../../constants';
import UserCard from '../../components/UserCard';
import {useNavigation} from '@react-navigation/native';
import {cardsData} from '../../data/dummydata';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');
const Home = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState('male');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.bg}
        style={styles.topSection}
        resizeMode="cover">
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
            <Image source={icons.search} style={styles.searchIcon} />
          </TouchableOpacity>
          <Text style={styles.homeText}>Home</Text>
          <View style={styles.profileInfo}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={images.profile} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.topContent}>
          <View style={styles.swiperWrapper}>
            <Swiper
              style={styles.swiper}
              showsPagination={true}
              dotColor="#FFB3C6"
              activeDotColor="#FF3B96"
              autoplay={true}
              autoplayTimeout={3}>
              <View style={styles.slide}>
                <Image
                  source={images.ad1}
                  style={styles.adImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={images.ad2}
                  style={styles.adImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={images.ad3}
                  style={styles.adImage}
                  resizeMode="cover"
                />
              </View>
            </Swiper>
          </View>
        </View>

        <View style={styles.genderTabs}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'male' && styles.activeGenderButton,
            ]}
            onPress={() => setSelectedGender('male')}>
            <Text
              style={[
                styles.genderButtonText,
                selectedGender === 'male' && styles.activeGenderButtonText,
              ]}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'female' && styles.activeGenderButton,
            ]}
            onPress={() => setSelectedGender('female')}>
            <Text
              style={[
                styles.genderButtonText,
                selectedGender === 'female' && styles.activeGenderButtonText,
              ]}>
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.bottomSection}>
        <ScrollView>
          {cardsData
            .filter(card => card.gender === selectedGender)
            .map(card => (
              <UserCard key={card.id} card={card} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 15,
  },
  searchIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  homeText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    marginLeft: width * 0.05,
  },
  profileInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 50,
  },
  topSection: {
    flex: 0.8,
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperWrapper: {
    width: '100%',
    height: height * 0.2,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: height * 0.03,
  },
  swiper: {
    borderRadius: 15,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adImage: {
    width: '100%',
    height: '100%',
  },

  genderTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    backgroundColor: '#fff',
    padding: 3,
    paddingVertical: 8,
    borderRadius: 10,
  },
  genderButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeGenderButton: {
    backgroundColor: '#FF3B96',
  },
  genderButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'gray',
  },
  activeGenderButtonText: {
    color: '#FFFFFF',
  },
  bottomSection: {
    flex: 0.7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -15,
    zIndex: 999,
    paddingTop: 15,
  },
});

export default Home;
