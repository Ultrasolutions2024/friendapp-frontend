import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { icons } from '../constants';
import { useNavigation } from '@react-navigation/native';


const QuickLinks = ({ modalVisible, toggleModal }) => {
  const slideAnim = useRef(new Animated.Value(300)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: modalVisible ? 0 : 300, // Move from right to left
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: modalVisible ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [modalVisible, scaleAnim, slideAnim]);

  const options = [
    {label: 'Warnings', icon: icons.warning, link: 'Warnings'},
    {label: 'Transaction', icon: icons.transaction, link: 'Transactions'},
    {label: 'Feedback', icon: icons.feedback, link: 'Feedback'},
    {
      label: 'Terms and Conditions',
      icon: icons.terms,
      link: 'TermsAndConditions',
    },
    {label: 'Settings', icon: icons.settings, link: 'Settings'},
  ];

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContainer, {
            transform: [
              { translateX: slideAnim }, // Animate from right to left
              { scale: scaleAnim },
            ],
          }]}>
            {options.map((option, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  toggleModal();
                  navigation.navigate(option.link);
                }}
              >
                <View style={styles.option}>
                  <Image source={option.icon} style={styles.icon} />
                  <Text style={styles.optionText}>{option.label}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Align to the right
    zIndex: 99999,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginTop: 40,
    marginRight: 20, // Adjusted to the right side
    width: 250, // Increased width for all options to fit
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#FF3B96',
  },
  optionText: {
    fontSize: 18,
  },
});

export default QuickLinks;
