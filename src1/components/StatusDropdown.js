import React, { useEffect, useState } from "react"; 
import { Platform } from "react-native";  
import { useDispatch, useSelector } from "react-redux"; 
import Dropdown from "./Dropdown";
import { fetchDropdownData } from "../redux/actions/authActions"; 

const StatusDropdown = ({ label, selectedValue, onValueChange, apiType, zIndex }) => {
    const dispatch = useDispatch();
    const dropdownData = useSelector(state => state.auth.dropdowns[apiType] || []); // ✅ Get stored data

    const [formattedStatusList, setFormattedStatusList] = useState([]);

    const formatDropdownData = (data) => {
        return (data?.result || data || []).map((item) => ({
            label: item.value01 || item.name || item.description || "Unknown",
            value: item.id ? item.id.toString() : "0",
        }));
    };

    const formatLocationDropdown = (data) => {
        return (data || []).map((item) => ({
            label: item.countryName || item.stateName || item.cityName || item.name || "Unknown",
            value: item.id ? item.id.toString() : "0",
        }));
    };

    useEffect(() => {
        // ✅ Fetch only if data is NOT already in Redux (prevents multiple calls)
        if (!dropdownData.length) {
            dispatch(fetchDropdownData(apiType));
        }
    }, [dispatch, apiType]); // ✅ Optimized dependencies

    useEffect(() => {
        // console.log(`Fetching data for: ${apiType}`);
        //console.log(`Dropdown data from Redux for ${apiType}:`, dropdownData);
        
        let formattedData = [];
        if (["country", "state", "city"].includes(apiType)) {
            formattedData = formatLocationDropdown(dropdownData);
        } else {
            formattedData = formatDropdownData(dropdownData);
        }
        console.log(`Formatted dropdown data for ${apiType}:`, formattedData);
        setFormattedStatusList(formattedData);
    }, [dropdownData]); // ✅ Only update when data changes

    return (
        <Dropdown
            label={label}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            options={formattedStatusList}
            zIndex={zIndex || 2000}
            elevation={5}
            modal={Platform.OS === "android"}
        />
    );
};

export default StatusDropdown;
