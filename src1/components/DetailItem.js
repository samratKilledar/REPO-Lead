import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import TextStyle from '../styles/TextStyle';

const DetailItem = ({ icon, label, detail }) => {
  const isLeadStatus = label === "Lead Status";
  const isServiceRequest = label === "Service Request";

  return (
    <View style={[styles.container, (isLeadStatus || isServiceRequest) && styles.specialContainer]}>
      {/* Label View */}
      <View style={styles.labelContainer}>
        <Image source={icon} style={styles.icon} />
        <CustomText text={label} customstyle={TextStyle.label}/>
      </View>

      {/* Detail View - Separate for Lead Status & Service Request */}
      <View style={{flex:1}}>
      {isLeadStatus ? (
        <View style={styles.leadStatusContainer}>
          <CustomText text={detail} customstyle={TextStyle.leadStatusText}/>
        </View>
      ) : isServiceRequest ? (
        <View style={styles.serviceRequestWrapper}>
          <CustomText text={detail} customstyle={TextStyle.serviceRequestText}/>
        </View>
      ) : (
        <View style={styles.detailContainer}>
          <CustomText text={detail} customstyle={TextStyle.detail}/>
        </View>
      )}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  specialContainer: {
    alignItems: 'flex-start', // Aligns "Lead Status" & "Service Request" differently
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex:1
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  
  detailContainer: {
    
    justifyContent: 'center',
  },
 

  // Lead Status Style
  leadStatusContainer: {
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 7,
    paddingLeft: 16,
    borderWidth: 2,
    borderColor: '#2B2162',
    borderRadius: 100,
    alignSelf: 'flex-start',
    height: 32,
    gap: 35,
    marginRight: 20,
  },
  
  // Service Request Wrapper 
  serviceRequestWrapper: {
    width: 220,
    padding: 2,
    borderRadius: 10,
    marginRight: 2,
  },

  
});

export default DetailItem;