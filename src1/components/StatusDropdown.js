import React, { useEffect, useState } from "react"; 
import { Platform } from "react-native";  
import Dropdown from "./Dropdown";
import { fetchDropdownData } from "../api/authApi";

const StatusDropdown = ({ label, selectedValue, onValueChange, apiType, zIndex }) => {
    const [formattedStatusList, setFormattedStatusList] = useState([]);

    // Function to format first five dropdowns (followUp, taskPriority, etc.)
    const formatStandardDropdown = (data) => {
        return (data?.result || data || []).map((item) => ({
            label: item.value01 || item.name || item.description || "Unknown",  // More fallback options
            value: item.id ? item.id.toString() : "0",
        }));
    };

    // Function to format country, state, city dropdowns
    const formatLocationDropdown = (data) => {
        return (data || []).map((item) => ({
            label: item.countryName || item.stateName || item.cityName || item.name || "Unknown",
            value: item.id ? item.id.toString() : "0",
        }));
    };

    useEffect(() => {
        const getDropdownData = async () => {
            try {
                console.log(`Fetching data for: ${apiType}`);
                const data = await fetchDropdownData(apiType);
                console.log("Raw API Response:", data);

                let formattedData = [];

                if (["country", "state", "city"].includes(apiType)) {
                    formattedData = formatLocationDropdown(data);
                } else {
                    formattedData = formatStandardDropdown(data);
                }

                console.log("Formatted Data:", formattedData);
                setFormattedStatusList(formattedData);
            } catch (error) {
                console.error(`Error loading ${apiType} data:`, error);
            }
        };
        getDropdownData();
    }, [apiType]);

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