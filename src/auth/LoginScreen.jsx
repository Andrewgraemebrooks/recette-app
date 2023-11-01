import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function LoginScreen() {
const {
    control,
    handleSubmit,
    formState: { errors },
    } = useForm({
    defaultValues: {
        email: "",
        password: "",
    },
    })

    const onSubmit = (data) => console.log(data)

    return (
      <View style={styles.container}>
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
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.errorText}>This is required.</Text>}
  
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
  
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    )
}

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