import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { fetchStatusList } from "../redux/actions/statusActions"; // Common action

const StatusDropdown = ({label ,selectedValue, onValueChange, apiType , zIndex }) => {
  const dispatch = useDispatch();
  const { statusList } = useSelector((state) => state.status[apiType] || {}); // Get data from Redux
  const [formattedStatusList, setFormattedStatusList] = useState([]);

  useEffect(() => {
    dispatch(fetchStatusList(apiType)); // Fetch based on API type
  }, [dispatch, apiType]);

  useEffect(() => {
    if (statusList?.length) {
      const formattedData = statusList.map((item) => ({
        label: item.value01, // Adjust based on API response
        value: item.id.toString(),
      }));
      setFormattedStatusList(formattedData);
    }
  }, [statusList]);

  return (
    <Dropdown
      label={label}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      options={formattedStatusList}
      zIndex={zIndex || 2000}
      elevation={5} // Helps on Android
      modal={Platform.OS === "android"}
    />
  );
};

export default StatusDropdown;
