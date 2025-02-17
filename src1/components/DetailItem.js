import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailItem = ({ icon, label, detail }) => {
  const isLeadStatus = label === "Lead Status";
  const isServiceRequest = label === "Service Request";

  return (
    <View style={[styles.container, (isLeadStatus || isServiceRequest) && styles.specialContainer]}>
      {/* Label View */}
      <View style={styles.labelContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>

      {/* Detail View - Separate for Lead Status & Service Request */}
      {isLeadStatus ? (
        <View style={styles.leadStatusContainer}>
          <Text style={styles.leadStatusText}>{detail}</Text>
        </View>
      ) : isServiceRequest ? (
        <View style={styles.serviceRequestContainer}>
          <Text style={styles.serviceRequestText}>{detail}</Text>
        </View>
      ) : (
        <View style={styles.detailContainer}>
          <Text style={styles.detail}>{detail}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  specialContainer: {
    alignItems: 'flex-start', // Aligns "Lead Status" & "Service Request" differently
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 120, // Fixed width for labels
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  label: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    color: '#616161',
  },
  detailContainer: {
    width: 205,
    justifyContent: 'center',
  },
  detail: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    color: '#212121',
  },

  // Lead Status Style
  leadStatusContainer: {
    // paddingHorizontal: 8,
    // paddingVertical: 4,
    
paddingTop: 6,
paddingRight: 16,
paddingBottom: 7,
paddingLeft: 16,

    borderWidth: 2,
    borderColor: '#6A1B9A',
    borderRadius: 100,
    alignSelf: 'flex-start',
    //width: 380,
    height: 32,
    gap: 35,
    marginRight:80,

  },
  leadStatusText: {
    color: '#6A1B9A',
    fontSize: 14,
    fontWeight: '600',
  },

  // Service Request Style
  serviceRequestContainer: {
    width: 380,
    height: 65,
    flexWrap: 'wrap',
    flexShrink: 1,
    gap: 35,
    backgroundColor: "pink",
  },
  serviceRequestText: {
    fontFamily: "Urbanist",
fontWeight: 500,
fontSize: 16,
lineHeight: 22.4,
letterSpacing: 0.2,

  },
});

export default DetailItem;
