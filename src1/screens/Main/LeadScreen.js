import React, { useEffect, useState,useCallback } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import LeadCard from "../../components/LeadCard";
import HeaderComp from "../../components/HeaderComp";
import TextStyle from "../../styles/TextStyle";
import { fetchLeads } from "../../redux/actions/leadListAction";
import CustomText from "../../components/CustomText";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import LottieScreen from "../../styles/Loader";
import { RefreshControl } from "react-native";

const LeadScreen = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { leads, loading, error } = useSelector((state) => state.leads);
  const [isLoading, setIsLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchLeads());
    }, [dispatch])
  );

  useEffect(()=>{
  //  alert(JSON.stringify(leads))
  })

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchLeads()).finally(() => setRefreshing(false));
  };

  // Show loading filter animation
  if (isLoading || loading) {
    return <LottieScreen />;
  }

  // Show error state
  if (error) {
    return <CustomText text={`Error: ${error}`} />;
  }
  const editProfile = async (id) => {
    try {
      if (!id) {
        Alert.alert('Error', "This lead isn't ready for editing yet");
        return;
      }

      setIsEditing(true);
      console.log('Editing lead ID:', id);

      const result = await dispatch(EditLeadFetch(id));
      if (result) {
        // Only navigate if successful
        alert(id)
       // navigation.navigate('Editlead1');
      }
    } catch (error) {
      console.error('Edit failed:', error);
      const message =
        error.response?.data?.message ||
        'Lead data not available. Please try again in a few seconds.';
      Alert.alert('Error', message);
    } finally {
      setIsEditing(false);
      setMenuVisible(false);
      setModalVisible(false);
    }
  };


  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />

      <View style={styles.centerContainer}>
        <View style={styles.lead}>
          <CustomText text="Lead" customstyle={TextStyle.leadText} />
        </View>

        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          style={{ padding: 20, flex: 1, marginBottom: 60 }}
        >

         {leads && leads.length > 0 ? (
            leads.map((item) => (
              <LeadCard
                key={item.id}
                id={item.id}
                name={item.customerName}
                phone={item.mobileNo}
                dateTime={item.leadDate}
                status={item.leadStatus}
                statusGradient={getStatusGradient(item.leadStatus)}
                menuType="follow"
                navigation={props.navigation}
                onPress={editProfile(item.id)}
                screenType="lead"
              />
            ))
          ) : (
            <CustomText text="" />
          )}
        </ScrollView>
      </View>
    </View>
  );
};


const getStatusGradient = (status) => {
  switch (status) {
    case "New Lead":
      return ["#246BFD", "#6F9EFF"]; // Blue gradient for New Lead
    case "Follow Up":
      return ["#FACC15", "#FFE580"]; // Yellow gradient for Follow Up
    case "Lead Win":
      return ["#4ADE80", "#73FFA6"]; // Green gradient for Lead Win
    default:
      return ["#246BFD", "#6F9EFF"]; // Default gradient
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
  },
  navbar: {
    height: 70,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 10,
    paddingLeft: 24,
    backgroundColor: "grey",
  },
  centerContainer: {
    flexGrow: 1,
  },
  lead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 22,
    gap: 12,
    paddingRight: 24,
    paddingLeft: 24,
  },
});

export default LeadScreen;