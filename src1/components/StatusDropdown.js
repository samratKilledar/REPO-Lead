import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import Dropdown from "./Dropdown";

const StatusDropdown = ({ label, selectedValue, onValueChange, apiType, zIndex, listData, searchable = true, searchPlaceholder = "Search..." }) => {
  const [selectedItem, setSelectedItem] = useState(selectedValue || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    //alert(apiType+" Selected Item: "+selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    if (selectedValue !== selectedItem) {
      setSelectedItem(selectedValue);
    }
  }, [selectedValue]);

  const formattedOptions = listData?.map((item) => {
    if (apiType === "city") {
      return {
        label: item.cityName,
        value: { id: item.id, name: item.cityName },
        isActive: item.isActive,
        searchableText: item.cityName.toLowerCase(),
      };
    } else if (apiType === "state") {
      return {
        label: item.stateName,
        value: { id: item.id, name: item.stateName },
        isActive: item.isActive,
        searchableText: item.stateName.toLowerCase(),
      };
    } else if (apiType === "country") {
      return {
        label: item.countryName,
        value: {
          id: item.id,
          name: item.countryName,
          isdCode: item.isdCode
        },
        isActive: item.isActive,
        searchableText: item.countryName.toLowerCase(),
      };
    } else if (apiType === "service") {
      return {
        label: item.value01,
        value: { id: item.id, name: item.value01 },
        searchableText: item.value01.toLowerCase(),
      };
    } else if (apiType === "taskPriority") {
      return {
        label: item.value01,
        value: { id: item.id, name: item.value01 },
        searchableText: item.value01.toLowerCase(),
      };
    } else if (apiType === "assignTo") {
      return {
        label: item.value,
        value: {
          id: item.key,
          name: item.value,
          option1: item.option1,
          option2: item.option2,
          option3: item.option3
        },
        searchableText: item.value.toLowerCase(),
      };
    } else {
      return {
        label: item.value01,
        value: {
          id: item.id?.toString() || "",
          name: item.value01,
          extraData: item.value02
        },
        searchableText: item.value01.toLowerCase(),
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
      searchable={searchable}
      searchPlaceholder={searchPlaceholder}
    />
  );
};

export default StatusDropdown;
