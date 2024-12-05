import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';

const FeedBacks = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendFeedback = () => {
    if (!name || !email || !feedback) {
      Alert.alert('Error', 'Please fill out all fields before submitting.');
      return;
    }

    const mailto = `mailto:support@example.com?subject=Feedback from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AFeedback:%0A${feedback}`;
    Linking.openURL(mailto)
      .then(() => {
        Alert.alert('Success', 'Feedback sent successfully!');
        setName('');
        setEmail('');
        setFeedback('');
      })
      .catch(() =>
        Alert.alert('Error', 'Failed to send feedback. Please try again.'),
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Value Your Feedback</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendFeedback}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedBacks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FF3B96',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#555555',
    backgroundColor: '#F9F9F9',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF3B96',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
