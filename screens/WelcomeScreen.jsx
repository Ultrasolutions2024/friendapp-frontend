/* eslint-disable quotes */
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { images } from "../constants";

const { height, width } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Swiper
        loop={true}
        showsPagination={true}
        paginationStyle={styles.paginationStyle}
        activeDotColor="#fff"
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        autoplay={true}
        autoplayTimeout={3}
      >
        <View style={styles.slide1}>
          <View style={styles.topSection}>
            <Text style={styles.appName}>Chingu</Text>
            <Text style={styles.descriptionHeading}>EarPhone's On!</Text>
            <Text style={styles.description}>
              Welcome to Chingu, the best way to connect with friends!
            </Text>
            <Image source={images.bg1} style={styles.image} />
          </View>
        </View>

        <View style={styles.slide2}>
          <View style={styles.topSection}>
            <Text style={styles.appName}>Chingu</Text>
            <Text style={styles.descriptionHeading}>100 % Safe and Secure</Text>
            <Text style={styles.description}>
              Find friends and expand your network with ease.
            </Text>
            <Image source={images.bg2} style={styles.image} />
          </View>
        </View>

        <View style={styles.slide3}>
          <View style={styles.topSection}>
            <Text style={styles.appName}>Chingu</Text>
            <Text style={styles.descriptionHeading}>
              Increase Your Chingu's
            </Text>
            <Text style={styles.description}>
              Connect and collaborate with your friends today!
            </Text>
            <Image source={images.bg3} style={styles.image3} />
          </View>
        </View>
      </Swiper>

      <View style={styles.bottomSection}>
        <Text style={styles.footerText}>
          Make a real <Text style={styles.chingusText}>Chingu's</Text>
        </Text>
        <Text style={styles.footerText2}>100% safe audio App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimerText}>
          By proceeding | you accepted the user policy & terms and conditions.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  slide1: {
    flex: 1,
    backgroundColor: "#3BEFFF",
  },
  slide2: {
    flex: 1,
    backgroundColor: "#3B58FF",
  },
  slide3: {
    flex: 1,
    backgroundColor: "#FF3B96",
  },
  topSection: {
    height: height * 0.7,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  appName: {
    fontSize: 64,
    color: "#BB9CEF",
    fontWeight: "600",
    fontFamily: "Dansing-Script",
  },
  description: {
    fontSize: 20,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Poppins-Regular",
  },
  descriptionHeading: {
    fontSize: 30,
    textAlign: "left",
    marginTop: 40,
    color: "#fff",
    fontFamily: "Poppins-Bold",
  },
  image: {
    width: width * 0.7,
    height: 400,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    top: height * 0.38,
  },
  image3: {
    width: width * 0.7,
    height: 450,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    top: height * 0.38,
  },
  bottomSection: {
    height: height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: -20,
  },
  footerText: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  footerText2: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    marginBottom: 15,
    fontFamily: "Poppins-Regular",
  },
  chingusText: {
    fontSize: 22,
    color: "#FF3B96", 
    fontFamily: "Poppins-Bold",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#FF3B96",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  disclaimerText: {
    fontSize: 14,
    textAlign: "center",
    color: "#999",
    marginTop: 15,
    fontFamily: "Poppins-Light",
  },
  paginationStyle: {
    position: "absolute",
    right: 270,
    bottom: height * 0.04,
  },
  dotStyle: {
    width: 10,
    height: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    backgroundColor: "#BB9CEF",
    borderRadius: 6,
    marginHorizontal: 8,
  },
});

export default WelcomeScreen;
