import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type LogType = 'All' | 'IR' | 'Flame' | 'Smoke';

type LogItem = {
  id: string;
  month: string;
  date: string;
  time: string;
  type: LogType;
  location: string;
  status: 'Suppressed' | 'Not Reached';
};

const logData: LogItem[] = [
  {
    id: '1',
    month: 'Apr',
    date: '24,2025',
    time: '19:20',
    type: 'IR',
    location: 'Kitchen',
    status: 'Suppressed',
  },
  {
    id: '2',
    month: 'Jan',
    date: '14,2024',
    time: '1:20',
    type: 'Flame',
    location: 'Kitchen',
    status: 'Suppressed',
  },
  {
    id: '3',
    month: 'Oct',
    date: '04,2024',
    time: '8:20',
    type: 'Smoke',
    location: 'Kitchen',
    status: 'Not Reached',
  },
  {
    id: '4',
    month: 'Apr',
    date: '24,2024',
    time: '19:20',
    type: 'IR',
    location: 'Kitchen',
    status: 'Suppressed',
  },
];

export default function FireLogsScreen() {
  const [selectedType, setSelectedType] = useState<LogType>('All');

  const filteredLogs = selectedType === 'All'
    ? logData
    : logData.filter(log => log.type === selectedType);

  const renderLogItem = ({ item }: { item: LogItem }) => (
    <View style={styles.logContainer}>
      <View style={styles.logLeft}>
        <Text style={styles.dateText}>{item.month} | {item.date}, {item.time}</Text>
        <View style={styles.locationRow}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>[{item.type}]</Text>
          </View>
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>

      <View style={styles.statusRight}>
        <Text style={[
          styles.statusText,
          item.status === 'Suppressed' ? styles.statusGreen : styles.statusRed,
        ]}>
          {item.status === 'Suppressed' ? '🟢 Suppressed' : '🔴 Not Reached'}
        </Text>
        <Text style={styles.viewChainText}>View on chain</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
    <View style={styles.sectionContainer}>
      {/* Header */}
             <View style={styles.FireLogContainer}>
               <Text style={styles.FireLogtext}>Fire Logs</Text>
               <Text style={styles.FireLogSubtext}>
                 Track Every Detection,Anytime
               </Text>
             </View>

      <View style={styles.filtersRow}>
        {['All', 'IR', 'Flame', 'Smoke'].map(type => (
          <TouchableOpacity
            key={type}
            onPress={() => setSelectedType(type as LogType)}
            style={[
              styles.filterButton,
              selectedType === type && styles.activeFilterButton
            ]}
          >
            <Text style={[
              styles.filterText,
              selectedType === type && styles.activeFilterText
            ]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredLogs}
        keyExtractor={item => item.id}
        renderItem={renderLogItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </SafeAreaView>
  );
}

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
      FireLogContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%',
      },
      FireLogtext: {
        paddingTop: 5,
        fontFamily: 'Inter',
        fontSize: 28,
        fontWeight: 700,
        color: '#000000',
        letterSpacing: 2,
      },
      FireLogSubtext: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 2,
        paddingBottom: 5,
        color: '#000000',
      }, 
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:'8%'
  },
  filterButton: {
    width:75,
    height:43,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#DBD2A780',
    borderRadius: 10,
  },
  activeFilterButton: {
    backgroundColor: '#FFD17B',
  },
  filterText: {
    fontSize: 18,
    color: '#000000',
  },
  activeFilterText: {
    fontWeight: 'bold',
  },
  logContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.6,
    borderBottomColor: '#ddd',
    height:100,
    width:366,
   paddingLeft:2,
   paddingRight:2,
   marginTop:"8%"

  },
  logLeft: {
    flex: 1,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color:"#000000"
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  iconText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight:700
  },
  locationText: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
  },
  statusGreen: {
    color: 'green',
  },
  statusRed: {
    color: 'red',
  },
  viewChainText: {
    fontSize: 12,
    fontWeight:500,
    color: '#FE6250B2',
    marginTop: 2,
  },
});
