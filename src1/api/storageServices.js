import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';


// const getUserId = async () => {
//     try {
//         const token = await AsyncStorage.getItem('token'); // Retrieve token from storage
//         if (token) {
//             const decoded = jwtDecode(token); // Decode JWT
//             console.log('User ID:', decoded.id); // Extract user ID
//             return decoded.id;
//         }
//     } catch (error) {
//         console.error('Error decoding token:', error);
//     }
//     return null;
// };

// Usage
// getUserId().then(userId => {
//     if (userId) {
//         console.log('User ID:', userId);
//     }
// });

// Function to save data to AsyncStorage
export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
   // alert(key+"=========>"+jsonValue)
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

// Function to retrieve data from AsyncStorage
export const getItem = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};


// Function to remove data from AsyncStorage
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

// Function to clear all AsyncStorage data
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};

export const getUserId = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        console.log('Retrieved Token:', token);

        if (!token) {
            console.log('No token found');
            return;
        }

        // Decode the token
        const decoded = jwtDecode(token);
        console.log('Decoded Token:', decoded);

        // Extract user ID using the correct key
        const userId = decoded ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        console.log('User ID:', userId);

        return userId;
    } catch (error) {
        console.error('Error retrieving or decoding token:', error);
    }
};


// const App = () => {
//     useEffect(() => {
//         getUserId();
//     }, []);

//     return null; // Empty component for testing
// };

// export default App;