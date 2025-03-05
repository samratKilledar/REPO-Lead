import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Dropdown from './Dropdown';

const StatusDropdown = ({ label, selectedValue, onValueChange, apiType, zIndex, listData }) => {
  const [selectedValue1, setSelectedValue] = useState(null);

  useEffect(() => {
    console.log("Selected Value:", selectedValue1);
  }, [selectedValue1]); 

  // Conditionally format options based on `apiType`
  const formattedOptions = listData?.map(item => {
    if (apiType === 'city') {
      return {
        label: item.cityName, // Display city name
        value: item.id, // City ID as value
        isActive: item.isActive
      };
    } 
    else  if (apiType === 'State') {
      return {
        label: item.stateName, // Display city name
        value: item.id, // City ID as value
        isActive: item.isActive
      };
    }
    else if (apiType === 'Country') {
      return {
        label: item.countryName, // Display country name
        value: item.countryId, // Country ID as value
      };
    } else {
      return {
        label: item.value01, // Default display text
        // value: item.id.toString(), // Default value
        extraData: item.value02, // Extra data if needed
      };
    }
  }) || [];

  return (
    <Dropdown
      label={label}
      selectedValue={selectedValue1}
      onValueChange={setSelectedValue}
      options={formattedOptions}
      zIndex={2000}
    />
  );
};

export default StatusDropdown;