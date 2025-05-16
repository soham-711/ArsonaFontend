import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';

type DashboardNavigationProp = {
  navigate: (screen: 'Dashboard' | 'ManualControl' | 'BotHealth' | 'Setting' | 'HeatMap' | 'FireLogs') => void;
};


const Dashboard = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const navigation = useNavigation<DashboardNavigationProp>();

  return (
    <View style={styles.parentComp}>
      <ScrollView style={styles.container}>
        {/* your existing content here */}
        {/* All content inside ScrollView like you already wrote (first_compo, image sections, gas cylinder, etc.) */}
        <View style={[styles.container1]}>
          {/* First component section */}
          <View style={styles.first_compo}>
            <View style={styles.row}>
              <Image
                source={require('../../public/vector.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={tw`ml-5 font-bold`}>Mode:</Text>
              <Text style={tw`ml-2 text-black`}>Autonomous</Text>

              <View style={styles.switchContainer}>
                <Switch
                  trackColor={{false: '#ff7105', true: '#ff7105'}}
                  thumbColor={isEnabled ? '#f5f6ea' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            <View style={styles.condition1}>
              <Image
                source={require('../../public/check.png')}
                style={styles.check}
              />
              <Text style={tw`ml-5 font-bold`}>Status:</Text>
              <Text style={tw`ml-2 text-green-600`}>Safe</Text>
            </View>
          </View>
          {/*Termal Data ection */}
          <ImageBackground
            source={require('../../public/Termal.png')}
            style={styles.background}
            imageStyle={{borderRadius: 15}}>
            <Text style={styles.background_image_text}>Termal Data</Text>
          </ImageBackground>
          {/* view heat map section */}
          <TouchableOpacity style={styles.Heatmap} onPress={() => navigation.navigate('HeatMap')}>
            <Text style={styles.Heatmap_text}>View Full Heat Map</Text>
          </TouchableOpacity>
          {/* Manual control , Fire logo,Buzzer */}
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 25,
              justifyContent: 'space-between',
            }}>
            {/* first component */}
            <TouchableOpacity style={[styles.manual, styles.shadow]} onPress={() => navigation.navigate('ManualControl')}>
              <Image
                source={require('../../public/Manual.png')}
                style={styles.manual_image}></Image>
              <View style={{marginTop: 8}}>
                <Text>Manual</Text>
                <Text>Control</Text>
              </View>
            </TouchableOpacity>
            {/* second component */}
            <TouchableOpacity style={[styles.manual, styles.shadow]} onPress={() => navigation.navigate('FireLogs')}>
              <Image
                source={require('../../public/Fire.png')}
                style={styles.manual_image}></Image>
              <View style={{marginTop: 8}}>
                <Text>Fire Logs</Text>
              </View>
            </TouchableOpacity>
            {/* THird component */}
            <View style={[styles.manual, styles.shadow]}>
              <Image
                source={require('../../public/Buzzer.png')}
                style={styles.manual_image}></Image>
              <View style={{marginTop: 8}}>
                <Text>Buzzer</Text>
              </View>
            </View>
          </View>

          {/* Gas cylinder */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              marginVertical: 15,
            }}>
            <Image
              source={require('../../public/image.png')}
              style={{width: 137, height: 190, marginRight: 15}}
            />

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F0DE80',
                paddingHorizontal: 10,
                paddingVertical: 20,
                borderWidth: 2,
                borderRadius: 16,
                borderColor: '#C44B4B',
              }}>
              <Text
                style={{
                  width: 196,
                  height: 40,
                  fontWeight: '600',
                  lineHeight: 30,
                  letterSpacing: -0.32,
                  color: '#cf2929',
                  fontSize: 26,
                }}>
                CO₂ Tank Alert
              </Text>

              <Text
                style={{
                  width: 181,
                  height: 37,
                  fontWeight: '500',
                  lineHeight: 30,
                  letterSpacing: -0.32,
                  color: '#DA712B',
                  fontSize: 15,
                }}>
                CO₂ low: 12% - Refill Now
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Dashboard')}>
          <Image
            source={require('../../public/Dashboard.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ManualControl')}>
          <Image
            source={require('../../public/Joystick.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Control</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('BotHealth')}>
          <Image
            source={require('../../public/Health.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}  onPress={() => navigation.navigate('Setting')}>
          <Image
            source={require('../../public/Setting.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  parentComp:{
position:'relative'
  },
  first_compo: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '#F5F6EA',
    borderRadius: 20,
    flexDirection: 'column',
  },
  check: {
    width: 25,
    height: 25,
  },
  container: {
    backgroundColor: '#EFF1D3',
    height: '100%',
    width: '100%',
  },
  container1: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  switchContainer: {
    // padding: 5,

    paddingHorizontal: 2, // Increases the area around the Switch
    borderRadius: 30, // Makes the container rounded
    backgroundColor: '#ff7105', // Match trackColor for full-round effect
    marginHorizontal: 40,
  },
  condition1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 5,
  },
  secondText: {},
  background: {
    marginVertical: 25,
    width: '100%',
    height: 140, // Set your desired height
  },
  background_image_text: {
    fontSize: 19,
    fontWeight: '500',
    marginHorizontal: 7,
    marginVertical: 7,
  },
  Heatmap: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Heatmap_text: {
    backgroundColor: '#F96f06',
    color: 'white',
    paddingVertical: 15,
    textAlign: 'center',
    width: 200,
    borderRadius: 45,
    fontWeight: 500,
    lineHeight: 27,
  },
  manual: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center', // center content horizontally
    margin: 10,
    width: 92,
    height: 95,
    paddingVertical: 7,
    borderRadius: 16,
  },

  manual_image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2, // Similar to black/200
    shadowRadius: 4,
    elevation: 5, // required for Android
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
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, // Android shadow
  },

  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

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
});
