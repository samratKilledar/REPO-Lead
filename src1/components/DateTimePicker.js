import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const DateTimePickerComponent = ({ selectedDate, onDateChange }) => {
  const [show, setShow] = useState(false);

  const handleDateChange = (event, newDate) => {
    if (newDate) {
      onDateChange(newDate);
    }
    setShow(Platform.OS === 'ios'); // Keep open on iOS until dismissed manually
  };

  return (
    <View>
      <TouchableOpacity style={styles.datePickerButton} onPress={() => setShow(true)}>
        <Text>{moment(selectedDate).format('DD-MM-YYYY')}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          display="default"
          is24Hour={true}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = {
  datePickerButton: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    marginBottom: 16,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
};

export default DateTimePickerComponent;
