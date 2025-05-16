import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const BotHealth = () => {
  const [percentage, setPercentage] = useState(40);

  const [Batterypercentage, setBatteryPercentage] = useState(100);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={{backgroundColor: '#EFF1D3'}}
        contentContainerStyle={[{paddingBottom: 120}]}>
        <View style={[styles.container]}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{marginBottom: 40}}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#000000',
                  textAlign: 'center',
                  marginBottom: 10,
                  fontFamily: 'Inter',
                  letterSpacing: 2,
                }}>
                Bot Health
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000000',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  letterSpacing: 2,
                }}>
                Health Monitored. Risks Minimized.
              </Text>
            </View>

            {/* Circle Container */}
            <View style={styles.circleWrapper}>
              <View style={styles.baseCircle}>
                <View
                  style={[
                    styles.filledCircle,
                    {
                      height: `${percentage}%`,
                    },
                  ]}
                />

                <View style={styles.textWrapper}>
                  <Text style={styles.percentageText}>{percentage} %</Text>
                </View>
                <View style={{position: 'absolute', top: '52%'}}>
                  <Text style={styles.co2Text}>CO₂ Level: 1</Text>
                </View>
              </View>
            </View>
          </View>
          {/* battery section is start */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}>
            <View style={[styles.batteryP]}>
              <View style={styles.batteryPCap}></View>
              <View
                style={{
                  backgroundColor: 'orange',
                  height: `${Batterypercentage}%`,
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}></View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                left: 25,
              }}>
              <Text
                style={{
                  left: 15,
                  width: 171,
                  fontSize: 16,
                  lineHeight: 30,
                  letterSpacing: -0.32,
                  fontWeight: 600,
                  marginBottom: 15,
                }}>
                Battery: {Batterypercentage}%
              </Text>
              <View
                style={{
                  width: 250,
                  borderWidth: 1,
                  borderColor: 'orange',
                  height: 30,
                  borderRadius: 15,
                  position: 'relative',
                }}>
                <View
                  style={{
                    backgroundColor: 'orange',
                    width: `${Batterypercentage}%`,
                    height: 30,
                    overflow: 'hidden',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    borderRadius: 15,
                  }}></View>
              </View>
            </View>
          </View>

          {/* batte ry section is end  */}

          {/* temparature sensor is completed */}
          <View
            style={{
              backgroundColor: '#dddFbf',
              flexDirection: 'column',
              padding: 10,
              width: '90%',
              borderRadius: 20,
            }}>
            {/* First Row */}
            <View style={[styles.row, {marginTop: 15}]}>
              <Image
                source={require('../../public/temp.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Temperature Sensor</Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.button,
                    {backgroundColor: '#4da761', color: 'white'},
                  ]}>
                  Ok
                </Text>
              </TouchableOpacity>
            </View>

            {/* Second Row */}
            <View style={styles.row}>
              <Image
                source={require('../../public/co2.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Co2 Sensor</Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    {
                      color: 'black',
                      width: 80,
                      height: 40,
                      fontSize: 13,
                      lineHeight: 40,
                      letterSpacing: -0.32,
                      textAlign: 'center',
                      borderRadius: 10,

                      backgroundColor: '#F3DE55',
                      fontWeight: 500,
                      alignSelf: 'center',
                      right: 5,
                    },
                  ]}>
                  Warning
                </Text>
                {/*     borderRadius: 10,
    width: 80,
    height: 40,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 40,
    letterSpacing: -0.32,
    right:5, */}
              </TouchableOpacity>
            </View>
          </View>
          {/* last button complete */}
          <TouchableOpacity
            style={{
              width: 335,
              backgroundColor: '#F1A151',
              height: 49,
              borderRadius: 12,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: 60,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                width: 280,
                lineHeight: 30,
                letterSpacing: 2,
                fontSize: 16,
                fontWeight: 700,
              }}>
              {' '}
              Run Check System
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../../public/Dashboard.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../../public/Joystick.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Control</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../../public/Health.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../../public/Setting.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BotHealth;

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: '#EFF1D3',
  },

  batteryP: {
    marginTop: 50,
    width: 70,
    height: 100,
    position: 'relative',
    borderWidth: 5,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#ddd',
  },
  batteryPCap: {
    height: 15,
    width: 40,
    position: 'absolute',
    top: -20,
    left: 11,

    backgroundColor: '#ddd',
  },
  textWrapper: {
    width: 124,
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    alignItems: 'center',
    transform: [{translateY: -30}],
  },
  co2Text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#CF2929',
    marginTop: 5,
    lineHeight: 30,
    letterSpacing: -0.32,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  circleWrapper: {
    // width: 230,
    // height: 230,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  baseCircle: {
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 15,
    borderColor: '#f96f06',
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  filledCircle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffa55a',
    zIndex: -1,
  },
  percentageText: {
    position: 'absolute',
    fontSize: 56,
    fontWeight: 500,
    color: '#F10707',
    top: '10%',
    left: `45%`,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15, // spacing between rows
    left: 7,
  },
  icon: {
    width: 40,
    height: 50,
    marginRight: '10%',
  },
  label: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    letterSpacing: -0.32,
    lineHeight: 30,
    fontWeight: 600,
  },
  button: {
    borderRadius: 10,
    width: 80,
    height: 40,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 40,
    letterSpacing: -0.32,
    right: 5,
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
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, // Android shadow
  },
});
