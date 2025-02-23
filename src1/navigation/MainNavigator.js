import {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Image, StyleSheet ,Modal,Text, useWindowDimensions} from 'react-native';
import { getFocusedRouteNameFromRoute ,useNavigation } from '@react-navigation/native'; // Import this

import HomeScreen from '../screens/Main/HomeScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import UpcomingMeetings from '../screens/Main/UpcomingMeetings';
import UpcomingTask from '../screens/Main/UpcomingTask';
import Notifications from '../screens/Main/Notifications';
import LeadScreen from '../screens/Main/LeadScreen';
import AddFollowUp from '../screens/Main/AddFollowUP';
import EditProfileScreen from '../screens/Main/EditProfileScreen';
import ClientScreen from '../screens/Main/ClientScreen';
import TaskScreen from '../screens/Main/TaskScreen';
import ClientAddFollowUP from '../screens/Main/ClientAddFollowUp';
import ClientDetails from '../screens/Main/ClientDetails';
import LeadDetails from '../screens/Main/LeadDetails';
import CloseAccountScreen from '../screens/Main/CloseAccountScreen';
import LeadAddServices from '../screens/Main/LeadAddServices'
import AddTask from '../screens/Main/AddTask';
import LeadAddOccupation from '../screens/Main/LeadAddOccupation';
import LeadAddPersonal from '../screens/Main/LeadAddPersonal';
import LoginScreen from '../screens/Auth/LoginScreen';
import LogoutScreen from '../screens/Auth/LogoutScreen';
import HeaderComp from '../components/HeaderComp';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="UpcomingMeetings" component={UpcomingMeetings} />
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <HomeStack.Screen name="LeadDetails" component={LeadDetails}/>
      <HomeStack.Screen name="UpcomingTask" component={UpcomingTask} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="AddFollowUp" component={AddFollowUp} />
      <HomeStack.Screen name="LogoutScreen" component={LogoutScreen}/>
      <HomeStack.Screen name="CloseAccountScreen" component={CloseAccountScreen}/>
      <HomeStack.Screen name="LeadAddServices" component={LeadAddServices} />
    </HomeStack.Navigator>
  );
};

const LeadStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
       <HomeStack.Screen name="Lead" component={LeadScreen} />
      <HomeStack.Screen name="AddFollowUp" component={AddFollowUp} />
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <HomeStack.Screen name="LeadDetails" component={LeadDetails} />
      <HomeStack.Screen name="LeadAddServices" component={LeadAddServices} />
      <HomeStack.Screen name="LogoutScreen" component={LogoutScreen}/>
    </HomeStack.Navigator>
  );
};

const LogoutStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="LogoutScreen" component={LogoutScreen} />
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <HomeStack.Screen name="LoginScreen" component={LoginScreen} />
    </HomeStack.Navigator>
  );
};


const ClientStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Client" component={ClientScreen} />
      <HomeStack.Screen name="ClientAddFollowUp" component={ClientAddFollowUP} />
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <HomeStack.Screen name="ClientDetails" component={ClientDetails} />
      <HomeStack.Screen name="LogoutScreen" component={LogoutScreen}/>
      <HomeStack.Screen name="LeadAddServices" component={LeadAddServices} />

    </HomeStack.Navigator>
  );
};


const TaskStackScreen = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Task" component={TaskScreen} />
      <HomeStack.Screen name="CloseAccountScreen" component={CloseAccountScreen} />
      <HomeStack.Screen name="AddTask" component={AddTask} /> 
      <HomeStack.Screen name="LogoutScreen" component={LogoutScreen}/>
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </HomeStack.Navigator>

  );
};

const CustomTabButton = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
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
            <TouchableOpacity style={styles.option} onPress={() =>{ setModalVisible(false) ;navigation.navigate('LeadAddPersonal');}}>
            <Text style={styles.optionText}>Lead</Text>
              <Image 
                source={require('../assets/icons/PlusFilter.png')} 
                style={styles.optionIcon} 
              />
             
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() =>{ setModalVisible(false) ;navigation.navigate('AddTask');} }>
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
        component={LeadStackScreen}
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
      
      {/* <Tab.Screen
        name="PlusButton"
        component={() => null} // Empty component, we don't need a screen here
        options={{
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      /> */}
      <Tab.Screen
        name="AddTask"
        component={AddTask} 
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props} onPress={() => navigation.navigate('AddTask')} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="LeadAddPersonal"
        component={SettingsScreen} 
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props} onPress={() => navigation.navigate('LeadAddPersonal')} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Client"
        component={ClientStackScreen}
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
        name="Task"
        component={TaskStackScreen}
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
       {/* <Tab.Screen
          name="Logout"
          component={LogoutStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused = require('../assets/images/Avatar.png')}
                                
                style={styles.icon}
              />
            ),
          }}
        /> */}
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
