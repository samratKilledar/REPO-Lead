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
// import { View, Text, Button, Alert, ScrollView } from "react-native";

// const App = () => {
//   const [serverResponse, setServerResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const apiPostLead = async () => {
//     console.log("Sending Data...");

//     const payload = {
      
//         "id": 0,
//         "tenantId": "root",
//         "customerId": 0,
//         "firstName": "Sanika",
//         "lastName": "Patil",
//         "emailId": "string",
//         "mobileNo": "string",
//         "whatsAppNo": "string",
//         "addressLine1": "string",
//         "addressLine2": "string",
//         "cityId": 0,
//         "cityName": "",
//         "stateId": 0,
//         "stateName": "",
//         "countryId": 0,
//         "countryName": "",
//         "pincode": 0,
//         "leadSource": 0,
//         "leadSourceName": "string",
//         "otherSource": "string",
//         "occupation": 0,
//         "occupationName": "string",
//         "organisationName": "string",
//         "workType": "twquyi",
//         "monthlyIncome": 0,
//         "assignedTo": 0,
//         "assignedToName": "string",
//         "leadStatus": 0,
//         "leadStatusName": "string",
//         "createdBy": 0,
//         "createdByName": "string",
//         "leadDate": "string",
//         "isActive": true,
//         "serviceDetails": [
//           {
//             "id": 0,
//             "customerId": 0,
//             "serviceId": 2,
//             "serviceName": "",
//             "leadId": 0,
//             "clientId": 0,
//             "isExistingClient": true,
//             "remark": "string",
//             "assignedTo": 0,
//             "assignedToName": "",
//             "isActive": true
//           }
//         ]
      
      
//     };

//     try {
//       const response = await fetch(
//         "https://opticalerp.in:85/api/lead/insertupdateleaddetails/create-update",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             tenant: "root", // ✅ Corrected Header Key
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       if (!response.ok) {
//         const errorText = await response.text(); // Try reading error response
//         throw new Error(`HTTP Error! Status: ${response.status} - ${errorText}`);
//       }

//       const result = await response.json();
//       console.log("Response:", result);
//       setServerResponse(result);
//       Alert.alert("Success", "Data sent successfully!"); // ✅ Alert for success
//     } catch (error) {
//       console.error("Network request failed:", error.message);
//       setError(error.message);
//       Alert.alert("Error", error.message); // ✅ Alert for errors
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={{ padding: 20 }}>
//       <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
//         Check Server Response
//       </Text>

//       <Button title="Send Lead Data" onPress={apiPostLead} />

//       {serverResponse && (
//         <View style={{ marginTop: 20 }}>
//           <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//             Server Response:
//           </Text>
//           <Text>{JSON.stringify(serverResponse, null, 2)}</Text>
//         </View>
//       )}

//       {error && (
//         <View style={{ marginTop: 20 }}>
//           <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
//             Error:
//           </Text>
//           <Text>{error}</Text>
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// export default App;




// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect } from 'react';
// import  { jwtDecode } from 'jwt-decode' ;

// const getUserId = async () => {
//     try {
//         const token = await AsyncStorage.getItem('token');
//         console.log('Retrieved Token:', token);

//         if (!token) {
//             console.log('No token found');
//             return;
//         }

//         // Decode the token
//         const decoded = jwtDecode(token);
//         console.log('Decoded Token:', decoded);

//         // Extract user ID using the correct key
//         const userId = decoded ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
//         console.log('User ID:', userId);

//         return userId;
//     } catch (error) {
//         console.error('Error retrieving or decoding token:', error);
//     }
// };


// const App = () => {
//     useEffect(() => {
//         getUserId();
//     }, []);

//     return null; // Empty component for testing
// };

// export default App;


// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect } from 'react';

// const storeToken = async () => {
//     try {
//         const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzdXByYUBhZG1pbi5jb20iLCJmdWxsTmFtZSI6InJvb3QgU3VwZXJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJyb290IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6IlN1cGVyQWRtaW4iLCJpcEFkZHJlc3MiOiIxNTIuNTcuMjkuMTAiLCJ0ZW5hbnQiOiJyb290IiwiaW1hZ2VfdXJsIjoiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwiZXhwIjoxNzQyNjQ2OTUzfQ.-4h764PNhtN2qvEO68yp_QNi6zIMGpg7fREYHQWJvOI";
//         await AsyncStorage.setItem('token', dummyToken);
//         console.log('Token stored successfully!');
//     } catch (error) {
//         console.error('Error storing token:', error);
//     }
// };

// const App = () => {
//     useEffect(() => {
//         storeToken();
//     }, []);

//     return null; // Empty component for testing
// };

// export default App;
