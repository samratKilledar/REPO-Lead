import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Dropdown from './Dropdown';

const StatusDropdown = ({ label, selectedValue, onValueChange, apiType, zIndex, listData }) => {
  const [selectedValue1, setSelectedValue] = useState(null);

  useEffect(() => {
    console.log("Selected Value:", selectedValue1);
  }, [selectedValue1]);

  const formattedOptions = listData?.map(item => {
    if (apiType === 'city') {
      return {
        label: item.cityName,
        value: item.id,
        isActive: item.isActive
      };
    }
    else if (apiType === 'State') {
      return {
        label: item.stateName,
        value: item.id,
        isActive: item.isActive
      };
    }
    else if (apiType === 'Country') {
      return {
        label: item.countryName,
        value: item.countryId,
      };
    } else {
      return {
        label: item.value01,
        // value: item.id.toString(),
        extraData: item.value02,
      };
    }
  }) || [];

  return (
    <Dropdown
      label={label}
      selectedValue={selectedValue1}
      onValueChange={setSelectedValue}
      options={formattedOptions}
      zIndex={zIndex || 2000}
      elevation={5}
      modal={Platform.OS === "android"}
    />
  );
};
export default StatusDropdown;