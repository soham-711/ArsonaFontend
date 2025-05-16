import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LineChart } from 'react-native-chart-kit';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const screenWidth = Dimensions.get('window').width;

export default function HeatMapScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.screen}>
      <LinearGradient colors={['#EFF1D3', '#EFF1D3']} style={styles.container}>
         {/* Header */}
               <View style={styles.HeatmapContainer}>
                 <Text style={styles.Heatmaptext}>Heat Map</Text>
                 <Text style={styles.HeatmapSubtext}>
                   Know the Heat.Act Fast
                 </Text>
               </View>

        {/* Line Chart */}
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [30, 45, 28, 80, 99, 43,50,80],
                color: () => '#FB0A0A',
              },
              {
                data: [50, 20, 60, 40, 70, 90],
                color: () => '#FF7105',
              },
              {
                data: [20, 30, 70, 60, 65, 70],
                color: () => '#5BC2F2',
              },
            ],
            legend: ['Max Heat', 'Full Heat', 'Cool']
          }}
          width={screenWidth}
          height={300}
          withShadow={false}
          chartConfig={{
            backgroundGradientFrom: '#EFF1D3',
            backgroundGradientTo: '#EFF1D3',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: () => '#333',
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#fff',
            }
          }}
          bezier
          style={styles.chart}
        />

        {/* Heat Labels */}
        <View style={styles.heatLabels}>
          <View style={styles.labelItem}>
            <View style={[styles.dot, { backgroundColor: '#5BC2F2' }]} />
            <Text style={styles.labelText}>Cool</Text>
          </View>
          <View style={styles.labelItem}>
            <View style={[styles.dot, { backgroundColor: '#FF7105' }]} />
            <Text style={styles.labelText}>Medium</Text>
          </View>
          <View style={styles.labelItem}>
            <View style={[styles.dot, { backgroundColor: '#FB0A0A' }]} />
            <Text style={styles.labelText}>Max Heat</Text>
          </View>
        </View>

        {/* Gradient Bar */}
        <LinearGradient
          colors={['#5BC2F2', '#FF7105', '#FB0A0A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.heatBar}
        />
        <View style={styles.heatScale}>
          <Text>Cool</Text>
          <Text>Hot</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Export ⬇</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Refresh <FontAwesomeIcon icon={faArrowsRotate}/></Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#EFF1D3',
    height:"100%",
    width:"100%"
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  HeatmapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
  },
  Heatmaptext: {
    paddingTop: 5,
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: 700,
    color: '#000000',
    letterSpacing: 2,
  },
  HeatmapSubtext: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 2,
    paddingBottom: 5,
    color: '#000000',
  },
  chart: {
    borderRadius: 16,
    paddingRight:30,
    marginRight:40,
marginTop:25,
  },
  heatLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical:10,
    marginTop:"4%"
  },
  labelItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 25,
    height: 25,
    borderRadius: 140,
    marginRight: 6,
  },
  labelText: {
    fontSize: 16,
    fontWeight:400,
    color: '#444',
  },
  heatBar: {
    height: 30,
    borderRadius: 10,
    width: '100%',
   marginTop:"5%"
  },
  heatScale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:5,
    fontSize:12,
    fontWeight:600,
    marginBottom: "5%",
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: "30%",
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#DBD2A7',
   justifyContent:"center",
   alignItems:"center",
    borderRadius: 10,
    width:168,
    height:52,
  },
  buttonText: {
    fontWeight: 700,
    fontSize:24,
    fontFamily:"Inter",
    color: '#000000',
  },
});
