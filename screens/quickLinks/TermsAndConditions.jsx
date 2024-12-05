import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.paragraph}>
        Welcome to our application! Please read these Terms and Conditions
        carefully before using the app. By accessing or using our app, you agree
        to be bound by these terms.
      </Text>

      <Text style={styles.heading}>1. Use of the App</Text>
      <Text style={styles.paragraph}>
        The app is provided for personal and non-commercial use only. Any
        unauthorized use may result in the termination of your access.
      </Text>

      <Text style={styles.heading}>2. Privacy Policy</Text>
      <Text style={styles.paragraph}>
        Your privacy is important to us. Please review our Privacy Policy to
        understand how we handle your personal information.
      </Text>

      <Text style={styles.heading}>3. Limitation of Liability</Text>
      <Text style={styles.paragraph}>
        We are not responsible for any damages or losses arising from your use
        of the app. Use it at your own risk.
      </Text>

      <Text style={styles.heading}>4. Changes to Terms</Text>
      <Text style={styles.paragraph}>
        We may update these terms from time to time. Continued use of the app
        after changes indicates your acceptance of the new terms.
      </Text>

      <Text style={styles.footer}>
        If you have any questions or concerns, please contact our support team.
      </Text>
    </ScrollView>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF', // White background for better readability
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FF3B96', // Dark color for title text
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#FF3B96',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555555',
  },
  footer: {
    marginTop: 24,
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});
