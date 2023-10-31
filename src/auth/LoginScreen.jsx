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
        firstName: "",
        lastName: "",
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
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}
  
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
  
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});