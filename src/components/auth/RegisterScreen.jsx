import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import log from 'loglevel';
import PropTypes from 'prop-types';
import * as Device from 'expo-device';
import useAuthStore from '../../store/auth';

export default function RegisterScreen(props) {
  const { navigation } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const register = useAuthStore((state) => state.register);

  log.debug(useAuthStore((state) => state.token));

  const onSubmit = async (data) => {
    try {
      await register({ ...data, device_name: Device.deviceName });
      navigation.navigate('Home');
    } catch (error) {
      log.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {errors.name && <Text style={styles.errorText}>Name is required</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            keyboardType="default"
            autoCapitalize="words"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.email && <Text style={styles.errorText}>Email is required</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCorrect={false}
          />
        )}
        name="email"
      />
      {errors.password && <Text style={styles.errorText}>Password is required</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password_confirmation && <Text style={styles.errorText}>Password is required</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password_confirmation"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

RegisterScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
});
