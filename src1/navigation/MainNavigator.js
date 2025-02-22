import {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Image, StyleSheet ,Modal,Text, useWindowDimensions} from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'; // Import this

import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import UpcomingMeetings from '../screens/Main/UpcomingMeetings';
import UpcomingTask from '../screens/Main/UpcomingTask';
import Notifications from '../screens/Main/Notifications';
import LeadScreen from '../screens/Main/LeadScreen';
import AddFollowUp from '../screens/Main/AddFollowUP';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="UpcomingMeetings" component={UpcomingMeetings} />
      <HomeStack.Screen name="UpcomingTask" component={UpcomingTask} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
    </HomeStack.Navigator>
  );
};

const CustomTabButton = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
  //const { width } = useWindowDimensions();
  return(
    <View>
  <TouchableOpacity style={styles.plusButton} onPress={() => setModalVisible(true)}>
    <View style={styles.plusButtonInner}>
      <Image 
        source={require('../assets/icons/Plus/plus.png')}
        style={styles.taskIcon} 
      />
    </View>
  </TouchableOpacity>
  <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setModalVisible(false)}
        >
          <View style={[styles.modalContainer]}>
            {/* Tooltip Arrow */}
            <View style={styles.triangle} />

            {/* Options with Icon & Text */}
            <TouchableOpacity style={styles.option} onPress={() => setModalVisible(false)}>
            <Text style={styles.optionText}>Lead</Text>
              <Image 
                source={require('../assets/icons/PlusFilter.png')} 
                style={styles.optionIcon} 
              />
             
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => setModalVisible(false)}>
            <Text style={styles.optionText}>Task</Text>
              <Image 
                source={require('../assets/icons/PlusTask.png')} 
                style={styles.optionIcon} 
              />
              
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
      </Modal>
  </View>
  );
};

const MainNavigator = () => {
  return (
  <View style={{flex:1}}>
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        return {
          tabBarShowLabel: false,
          tabBarStyle: routeName === 'Notifications' ? { display: 'none' } : styles.tabBarStyle,
          headerShown: false,
        };
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/HomeBlue/homeBlue.png') 
                              : require('../assets/icons/HomeGray/home.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lead"
        component={LeadScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/LeadLogoBlue/leadLogoBlue.png') 
                              : require('../assets/icons/LeadLogo/leadLogo.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddTask"
        component={ProfileScreen} 
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props} onPress={() => navigation.navigate('AddTask')} />
          ),
        }}
      />
      <Tab.Screen
        name="Client"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/ChatBlue/chatBlue.png') 
                              : require('../assets/icons/ClientChat/clientChat.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddFollowUp"
        component={AddFollowUp}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/TaskBlue/taskBlue.png') 
                              : require('../assets/icons/Task/task.png')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
    </View>
    
    // <Tab.Screen name="Home" component={HomeScreen} />
    // <Tab.Screen name="Profile" component={ProfileScreen} />
    // <Tab.Screen name="Settings" component={SettingsScreen} />
    // <Tab.Screen name="Lead" component={LeadScreen} />
    // <Tab.Screen name="Addfollowup" component={AddFollowUp} />
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    height: 70, 
    paddingBottom: 5, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    width: 25, 
    height: 25, 
    resizeMode: 'contain', 
    marginBottom: -5, 
  },
  plusButton: {
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonInner: {},
  taskIcon: {
    width: 60, 
    height: 60,
    resizeMode: 'contain', 
  },

  //modal style for plus icon 
  container: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    //width: width * 0.5,
    width:184,
    paddingVertical: 20,
    borderRadius: 32,
    alignItems: 'center',
    position: 'absolute',
    bottom: 90, // Positioned just above the FAB
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    Top:32,
    Left:32,
    gap:24,
  },
  optionText: {
    fontFamily:'Urbanist',
    fontSize: 18,
    fontWeight: '600',
    color: '#424242',
    lineHeight:25.2,
    letterSpacing:0.2,
  },
  optionIcon: {
    width: 28,
    height: 28,
    //tintColor: '#4C4DDC',
  },
  triangle: {
    position: 'absolute',
    bottom: -10,
    left: '50%',
    marginLeft: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10, 
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
});

export default MainNavigator;
