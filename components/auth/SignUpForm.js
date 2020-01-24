import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { signUpValidationRules } from '../../validation /auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import ButtonCustom from '../shared/button/ButtonCustom';
import Colors from '../../constants/Colors';
import { TextInputFieldWhite } from '../shared/FormFieldsWhite';

export const SignUpForm = props => (
  <View>
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
      }}
      onSubmit={values => props.onSubmit(values)}
      validationSchema={signUpValidationRules}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Field
            name="first_name"
            component={TextInputFieldWhite}
            placeholder={$t('auth.enterFirstName')}
          />
          <Field
            name="last_name"
            component={TextInputFieldWhite}
            placeholder={$t('auth.enterLastName')}
          />
          <Field name="email" component={TextInputFieldWhite} placeholder={$t('auth.enterEmail')} />
          {props.signUpErrors.email && (
            <ErrorText error={!!props.signUpErrors.email} message={props.signUpErrors.email} />
          )}
          <Field
            name="password"
            component={TextInputFieldWhite}
            secureTextEntry
            placeholder={$t('auth.enterPassword')}
          />
          <Field
            name="confirm_password"
            component={TextInputFieldWhite}
            secureTextEntry
            placeholder={$t('auth.confirmPassword')}
          />
          <ButtonCustom
            title={$t('auth.signUp')}
            onPress={handleSubmit}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      )}
    </Formik>
  </View>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  signUpErrors: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.mainColor,
    borderRadius: 30,
    display: 'flex',
    elevation: 1,
    height: 50,
    justifyContent: 'center',
    width: 300
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  container: {
    alignItems: 'center'
  }
});
