import { View, Text, Image, Switch, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled_a, setIsEnabled_a] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleSwitch_a = () => setIsEnabled_a(previousState => !previousState);

  return (
    <View style={{height:'100%',backgroundColor: '#F6F8DE' }}>
      {/* First Body */}
      <View style={{
        height: 294,
        backgroundColor: '#c44b4b',
        width: screenWidth,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 40, height: 40 }} source={require("../../public/setting2.png")} />
          <Text style={{ fontSize: 30, letterSpacing: 1, fontWeight: '700', color: 'black', left: 10 }}>
            Settings
          </Text>
        </View>
      </View>

      {/* Scrollable Second Body */}
      <ScrollView
        style={{ position: 'absolute', top: 140, width: '100%' }}
        contentContainerStyle={{ paddingBottom: 120, }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          width: '90%',
          alignSelf: 'center',
          paddingHorizontal: 15,
          backgroundColor: '#F6F8DE',
          borderRadius: 16,

          shadowColor: '#4B4B4B',
          shadowOffset: { width: 12, height: -200 },
          shadowOpacity: 0.8, // equivalent to CC alpha
          shadowRadius: 4,
        
          // Shadow for Android
          elevation: 30,
          zIndex: 10,
          paddingVertical: 20,
        }}>
          <View style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={require("../../public/Man.jpg")}
            />
            <Text style={{ left: 10 }}>Saikat Sinchan Ghosh</Text>
          </View>

          {/* Divider */}
          <View style={{ marginTop: '9%' }}>
            <View style={{ borderWidth: 0.5, borderColor: '#CACACA' }}></View>
          </View>

          {/* Account Settings */}
          <View style={{ marginTop: '9%' }}>
            <Text style={{ fontSize: 18, color: '#ADADAD' }}>
              Account Settings
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Text style={{ fontSize: 18 }}>Edit profile</Text>
              <Image style={{ width: 30, height: 40 }} source={require("../../public/Arrow.png")} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Text style={{ fontSize: 18 }}>Change Password</Text>
              <Image style={{ width: 30, height: 40 }} source={require("../../public/Arrow.png")} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
              <Text style={{ fontSize: 18 }}>Add a payment method</Text>
              <Image style={{ width: 30, height: 40 }} source={require("../../public/Arrow.png")} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
              <Text style={{ fontSize: 18 }}>Push Notification</Text>
              <View style={{
                paddingHorizontal: 2,
                borderRadius: 50,
                backgroundColor: '#DDDFBF',
              }}>
                <Switch
                  trackColor={{ false: "#DDDFBF", true: "#DDDFBF" }}
                  thumbColor={isEnabled_a ? "#ffffff" : "#767577"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch_a}
                  value={isEnabled_a}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
              <Text style={{ fontSize: 18 }}>Dark mode</Text>
              <View style={{
                paddingHorizontal: 2,
                borderRadius: 50,
                backgroundColor: '#DDDFBF',
              }}>
                <Switch
                  trackColor={{ false: "#DDDFBF", true: "#DDDFBF" }}
                  thumbColor={isEnabled ? "#ffffff" : "#767577"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={{ marginTop: '10%' }}>
            <View style={{ borderWidth: 0.5, borderColor: '#CACACA' }}></View>
          </View>

          {/* More Section */}
          <View>
            <Text style={{ fontSize: 18, color: '#ADADAD', marginTop: 20 }}>
              More
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Text style={{ fontSize: 18 }}>About us</Text>
              <Image style={{ width: 30, height: 40 }} source={require("../../public/Arrow.png")} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Text style={{ fontSize: 18 }}>Privacy Policy</Text>
              <Image style={{ width: 30, height: 40 }} source={require("../../public/Arrow.png")} />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
<TouchableOpacity style={styles.navButton}>
  <Image source={require('../../public/Dashboard.png')} style={styles.navIcon} />
  <Text style={styles.navText}>Dashboard</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navButton}>
  <Image source={require('../../public/Joystick.png')} style={styles.navIcon} />
  <Text style={styles.navText}>Control</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navButton}>
  <Image source={require('../../public/Health.png')} style={styles.navIcon} />
  <Text style={styles.navText}>Health</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navButton}>
  <Image source={require('../../public/Setting.png')} style={styles.navIcon} />
  <Text style={styles.navText}>Setting</Text>
</TouchableOpacity>
</View>

    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  
  navText: {
    fontSize: 12,
    color: '#333',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, // Android shadow
  },

  
});