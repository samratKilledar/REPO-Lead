import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import Dropdown from "./Dropdown";

const StatusDropdown = ({ label, selectedValue, onValueChange, apiType, zIndex, listData }) => {
  const [selectedItem, setSelectedItem] = useState(selectedValue || null);

  useEffect(() => {
    console.log("Selected Item:", selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    if (selectedValue !== selectedItem) {
      setSelectedItem(selectedValue);
    }
  }, [selectedValue]);

  const formattedOptions =
    listData?.map((item) => {
      if (apiType === "city") {
        return {
          label: item.cityName,
          value: { id: item.id, name: item.cityName },
          isActive: item.isActive,
        };
      } else if (apiType === "state") {
        return {
          label: item.stateName,
          value: { id: item.id, name: item.stateName },
          isActive: item.isActive,
        };
      } else if (apiType === "country") {
        return {
          label: item.countryName,
          value: { id: item.id, name: item.countryName, isdCode: item.isdCode },
          isActive: item.isActive,
        };
      } else if (apiType === "service") {
        return {
          label: item.value01,
          value: { id: item.id, name: item.value01 },
        };
      } else if (apiType === "taskPriority") {
        return {
          label: item.value01,
          value: { id: item.id, name: item.value01 },
        }
      }
      else if (apiType === "assignTo") {
        return {
          label: item.value,
          value: {
            id: item.key,
            name: item.value,
            option1: item.option1,
            option2: item.option2,
            option3: item.option3
          }
        };
      }
      else {
        return {
          label: item.value01,
          value: { id: item.id?.toString() || "", name: item.value01, extraData: item.value02 },
        };
      }
    }) || [];

  return (
    <Dropdown
      label={label}
      selectedValue={selectedItem}
      onValueChange={(newValue) => {
        setSelectedItem(newValue);
        if (onValueChange) {
          onValueChange(newValue);
        }
      }}
      options={formattedOptions}
      zIndex={zIndex || 2000}
      elevation={5}
      modal={Platform.OS === "android"}
    />
  );
};

export default StatusDropdown;
