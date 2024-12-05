import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {images} from '../../constants';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../store/user/userSlice';
const {width} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
const UserDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleNext = async e => {
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    const formattedPhoneNumber = `+91${phoneNumber}`;
    dispatch(
      registerUser({nickname, gender, phoneNumber: formattedPhoneNumber}),
    );
   navigation.reset({
     index: 0,
     routes: [{name: 'Tab'}],
   });
  };

  // Date Picker Handler
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString();
      setDateOfBirth(formattedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Chingu</Text>

      <Text style={styles.label}>Nickname:</Text>
      <TextInput
        value={nickname}
        onChangeText={setNickname}
        placeholder="Enter your nickname"
        style={styles.input}
      />

      <Text style={styles.label}>Gender:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            gender === 'male' && styles.selectedButton,
          ]}
          onPress={() => setGender('male')}>
          <Image source={images.male} style={styles.radioImage} />
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.radioButton,
            gender === 'female' && styles.selectedButton,
          ]}
          onPress={() => setGender('female')}>
          <Image source={images.female} style={styles.radioImage} />
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.label}>Date of Birth:</Text>
      <TouchableOpacity
        style={styles.dateInputContainer}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>{dateOfBirth || 'Select Date of Birth'}</Text>
        <Ionicons name="calendar-outline" size={24} color="#888" style={styles.dateIcon} />
      </TouchableOpacity> */}

      {/* {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )} */}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'flex-start',
  },
  appName: {
    fontSize: 64,
    color: '#BB9CEF',
    fontFamily: 'Dansing-Script',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#FF3B96',
    padding: 10,
    borderRadius: 0,
    marginBottom: 20,
    fontSize: 16,
    justifyContent: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 100,
    backgroundColor: '#fcfcfc',
    width: 150,
    height: 150,
    overflow: 'hidden',
  },
  selectedButton: {
    backgroundColor: '#e0e0e0',
  },
  radioImage: {
    width: 70,
    height: 90,
    marginBottom: 5,
  },
  radioText: {
    fontSize: 16,
    color: '#333',
  },
  dateInputContainer: {
    borderWidth: 1,
    borderColor: '#FF3B96',
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  dateIcon: {
    marginLeft: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF3B96',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default UserDetails;
