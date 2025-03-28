/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import StartApp from "./src1/StartApp";

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!isConnected && (
        <View style={styles.networkStrip}>
          <Text style={styles.networkText}>Please on your data connection.</Text>
        </View>
      )}
      <StartApp />
    </View>
  );
};

const styles = StyleSheet.create({
  networkStrip: {
    width: '100%',
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  networkText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;

// import React, { useState } from "react";
// import { View, Text, Button, Alert, ActivityIndicator, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const App = () => {
//   const [loading, setLoading] = useState(false);

  // const apiPostLead = async () => {
  //   console.log("Sending Data...");
  //   setLoading(true);

  //   try {
  //     // 🔹 Fetch Token from AsyncStorage
  //     const token = await AsyncStorage.getItem("authToken");
  //     console.log(token);
  //     if (!token) {
  //       throw new Error("Authentication token not found. Please login again.");
  //     }

  //     const payload = {
  //       id: 0,
  //       tenantId: "root",
  //       customerId: 0,
  //       firstName: "Sanika",
  //       lastName: "Patil",
  //       emailId: "string",
  //       mobileNo: "string",
  //       whatsAppNo: "string",
  //       addressLine1: "string",
  //       addressLine2: "string",
  //       cityId: 0,
  //       cityName: "",
  //       stateId: 0,
  //       stateName: "",
  //       countryId: 0,
  //       countryName: "",
  //       pincode: 0,
  //       leadSource: 0,
  //       leadSourceName: "string",
  //       otherSource: "string",
  //       occupation: 0,
  //       occupationName: "string",
  //       organisationName: "string",
  //       workType: "twquyi",
  //       monthlyIncome: 0,
  //       assignedTo: 0,
  //       assignedToName: "string",
  //       leadStatus: 0,
  //       leadStatusName: "string",
  //       createdBy: 0,
  //       createdByName: "string",
  //       leadDate: "string",
  //       isActive: true,
  //       serviceDetails: [
  //         {
  //           id: 0,
  //           customerId: 0,
  //           serviceId: 2,
  //           serviceName: "",
  //           leadId: 0,
  //           clientId: 0,
  //           isExistingClient: true,
  //           remark: "string",
  //           assignedTo: 0,
  //           assignedToName: "",
  //           isActive: true,
  //         },
  //       ],
  //     };

  //     const response = await fetch(
  //       "https://opticalerp.in:85/api/lead/insertupdateleaddetails/create-update",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: Bearer ${token}, // 🔹 Use stored token
  //           tenant: "root",
  //         },
  //         body: JSON.stringify(payload),
  //       }
  //     );

  //     console.log("📢 Response Status Code:", response.status);
  //     console.log("📢 Response Headers:", response.headers);

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       console.error("❌ API Error:", response.status, errorText);
  //       Alert.alert("Error", HTTP Error ${response.status}: ${errorText});
  //       return;
  //     }

  //     const text = await response.text();
  //     if (!text.trim()) {
  //       console.warn("⚠ Server returned an empty response.");
  //       Alert.alert("Warning", "Data sent successfully, but no response from server.");
  //       return;
  //     }

  //     const result = JSON.parse(text);
  //     console.log("✅ API Response Body:", result);
  //   } catch (error) {
  //     console.error("❌ Error:", error.message);
  //     Alert.alert("Error", error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>React Native API Call</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#007BFF" />
//       ) : (
//         <Button title="Send Data" onPress={apiPostLead} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5F5F5",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
// });

// export default App;