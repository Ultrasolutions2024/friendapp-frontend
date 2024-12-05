import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SettingScreen = () => {
  const handlePress = option => {
    console.log(`${option} pressed`);
    // Add navigation or functionality for each setting option
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.settingOption}
          onPress={() => handlePress('Account')}>
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingOption}
          onPress={() => handlePress('Notifications')}>
          <Text style={styles.optionText}>Notification Preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingOption}
          onPress={() => handlePress('Privacy')}>
          <Text style={styles.optionText}>Privacy & Security</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingOption}
          onPress={() => handlePress('Help')}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingOption}
          onPress={() => handlePress('About')}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={[styles.settingOption, styles.logout]}
        onPress={() => handlePress('Logout')}>
        <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 16, // To ensure space for the logout button
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333333',
  },
  settingOption: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    margin:10,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },
  logout: {
    backgroundColor: '#FF3B96',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
