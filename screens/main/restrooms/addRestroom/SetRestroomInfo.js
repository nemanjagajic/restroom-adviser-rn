import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';

import ButtonCustom from '../../../../components/shared/button/ButtonCustom';
import Colors from '../../../../constants/Colors';
import TimePickerFromTo from '../../../../components/shared/TimePickerFromTo';

class SetRestroomInfo extends Component {
  static navigationOptions = {
    headerTitle: 'Set restroom info',
    headerTintColor: Colors.headerTintColor,
    headerStyle: {
      backgroundColor: '#fff'
    }
  };

  state = {
    name: '',
    description: '',
    workingDaysFrom: '',
    workingDaysTo: '',
    saturdayFrom: '',
    saturdayTo: '',
    sundayFrom: '',
    sundayTo: ''
  };

  formattedWorkingHours = () => {
    const workingDaysFrom = `${this.state.workingDaysFrom || 'not specified'}`;
    const workingDaysTo = `${this.state.workingDaysTo || 'not specified'}`;
    const saturdayFrom = `${this.state.saturdayFrom || 'not specified'}`;
    const saturdayTo = `${this.state.saturdayTo || 'not specified'}`;
    const sundayFrom = `${this.state.sundayFrom || 'not specified'}`;
    const sundayTo = `${this.state.sundayTo || 'not specified'}`;

    const workingDays = `${workingDaysFrom} - ${workingDaysTo}`;
    const saturday = `${saturdayFrom} - ${saturdayTo}`;
    const sunday = `${sundayFrom} - ${sundayTo}`;

    return `${workingDays}{,}${saturday}{,}${sunday}`;
  };

  handleNext = () => {
    this.props.navigation.navigate('PickRestroomImages', {
      name: this.state.name,
      description: this.state.description,
      workingHours: this.formattedWorkingHours(),
      latitude: this.props.navigation.getParam('latitude'),
      longitude: this.props.navigation.getParam('longitude'),
      locationInfo: this.props.navigation.getParam('locationInfo')
    });
  };

  handleTimePicked = (date, field) => {
    const hours = this.addZeroPrefix(date.getHours());
    const minutes = this.addZeroPrefix(date.getMinutes());
    this.setState({ [field]: `${hours}:${minutes}` });
  };

  addZeroPrefix = num => {
    if (num < 10) return `0${num}`;
    return num;
  };

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChange={event => this.setState({ name: event.nativeEvent.text })}
          placeholder={'Name*'}
        />
        <TextInput
          style={styles.inputDesc}
          value={this.state.description}
          onChange={event => this.setState({ description: event.nativeEvent.text })}
          placeholder={'Description'}
        />
        <Text style={styles.timePickerTitle}>Monday to Friday</Text>
        <TimePickerFromTo
          from={this.state.workingDaysFrom}
          to={this.state.workingDaysTo}
          fieldNameFrom={'workingDaysFrom'}
          fieldNameTo={'workingDaysTo'}
          handleTimePicked={this.handleTimePicked}
        />
        <Text style={styles.timePickerTitle}>Saturday</Text>
        <TimePickerFromTo
          from={this.state.saturdayFrom}
          to={this.state.saturdayTo}
          fieldNameFrom={'saturdayFrom'}
          fieldNameTo={'saturdayTo'}
          handleTimePicked={this.handleTimePicked}
        />
        <Text style={styles.timePickerTitle}>Sunday</Text>
        <TimePickerFromTo
          from={this.state.sundayFrom}
          to={this.state.sundayTo}
          fieldNameFrom={'sundayFrom'}
          fieldNameTo={'sundayTo'}
          handleTimePicked={this.handleTimePicked}
        />
        <ButtonCustom
          title={'Next'}
          style={styles.button}
          textStyle={styles.addButtonText}
          onPress={this.handleNext}
        />
      </KeyboardAvoidingView>
    );
  }
}

SetRestroomInfo.propTypes = {
  navigation: PropTypes.object,
  onSubmit: PropTypes.func,
  invalidOldPasswordError: PropTypes.bool,
  setAddingRestroomInfo: PropTypes.func
};

const styles = StyleSheet.create({
  addButtonText: {
    color: '#fff',
    fontSize: 16
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.mainColor,
    borderRadius: 30,
    display: 'flex',
    elevation: 1,
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    width: 140
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    marginTop: 10
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: '#666666',
    fontSize: 16,
    height: 50,
    width: 300
  },
  inputDesc: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: '#666666',
    fontSize: 16,
    height: 50,
    marginBottom: 10,
    width: 300
  },
  timePickerTitle: {
    color: '#999',
    fontSize: 16,
    marginTop: 10
  }
});

export default SetRestroomInfo;
