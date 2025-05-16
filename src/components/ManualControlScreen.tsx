import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faWifi} from '@fortawesome/free-solid-svg-icons';
import Slider from '@react-native-community/slider';

const ManualControlScreen = () => {
  const [speed, setSpeed] = useState(50);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.sectionContainer}>
        {/* Header */}
        <View style={styles.ManualControlContainer}>
          <Text style={styles.ManualControltext}>Manual Control</Text>
          <Text style={styles.ManualControlSubtext}>
            Full Control at Your Fingertips
          </Text>
        </View>

        {/* Connect Button */}
        <View style={styles.ConnectContainerParent}>
          <View style={styles.ConnectContainer}>
            <FontAwesomeIcon icon={faWifi} style={styles.iconWifi} size={44} />
            <Text style={styles.connectText}>Connect</Text>
          </View>
        </View>

        {/* Control Pad */}
        <View style={styles.cycleCntainer}>
          <View style={styles.cycle1}>
            <View style={styles.cycle2}>
              <View style={styles.cycle3}>
                <View style={styles.cycle4}>
                  <View style={styles.cycle5}>
                    <TouchableOpacity style={styles.arrowButtonTop}>
                      <Text style={styles.arrow}>▲</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.arrowButtonLeft}>
                      <Text style={styles.arrow}>◀</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.arrowButtonRight}>
                      <Text style={styles.arrow}>▶</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.arrowButtonBottom}>
                      <Text style={styles.arrow}>▼</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cycle6}>
                      <Text style={styles.emergencyText}>EMERGENCY</Text>
                      <Text style={styles.stopText}>STOP</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Speed Slider */}
        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Control your Speed</Text>

          {/* Visual Progress Bar */}
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBackground}>
              <View style={[styles.progressFill, {width: `${speed}%`}]} />
            </View>
          </View>

          {/* Labels */}
          <View style={styles.rangeLabels}>
            <Text style={styles.rangeText}>0</Text>
            <Text style={styles.rangeText}>100</Text>
          </View>

          {/* Functional Slider */}
          <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={speed}
            onValueChange={value => setSpeed(value)}
            minimumTrackTintColor="#FF4D00"
            maximumTrackTintColor="red"
            thumbTintColor="#FF4D00"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ManualControlScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#EFF1D3',
    height:"100%",
    width:"100%"
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  ManualControlContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
  },
  ManualControltext: {
    paddingTop: 5,
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: 700,
    color: '#000000',
    letterSpacing: 2,
  },
  ManualControlSubtext: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 2,
    paddingBottom: 5,
    color: '#000000',
  },
  ConnectContainerParent: {
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConnectContainer: {
    display: 'flex',
    backgroundColor: '#DDDFBF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#767151',
  },
  iconWifi: {
    color: 'black',
    marginRight: 10,
  },
  connectText: {
    fontSize: 36,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#000000',
  },
  cycleCntainer: {
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  cycle1: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
    width: 350,
    borderRadius: '50%',
  },
  cycle2: {
    backgroundColor: '#FF4D00',
    width: '97%',
    height: '97%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 170,
  },
  cycle3: {
    backgroundColor: '#ffffff',
    width: '92%',
    height: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  cycle4: {
    backgroundColor: '#EFF1D3',
    width: '95%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  cycle5: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    borderWidth: 5,
    borderRadius: 70,
    position: 'relative',
  },
  cycle6: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderColor: '#eff1b3',
    borderWidth: 5,
    borderRadius: 60,
  },
  emergencyText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  stopText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 70,
    color: 'black',
  },
  arrowButtonTop: {
    position: 'absolute',
    top: -98,
  },
  arrowButtonBottom: {
    position: 'absolute',
    bottom: -80,
  },
  arrowButtonLeft: {
    position: 'absolute',
    left: -80,
  },
  arrowButtonRight: {
    position: 'absolute',
    right: -80,
  },
  sliderContainer: {
    marginTop: '12%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 1,
  },
  progressBarWrapper: {
    width: '100%',
    height: 40,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'orange',
    backgroundColor: '#fff',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 10,
  },
  progressBackground: {
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 4,
    marginRight: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF4D00',
  },
  rangeLabels: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 5,
  },
  rangeText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000000',
  },
});
