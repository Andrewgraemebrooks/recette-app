import React from 'react'
import { useForm, Controller } from "react-hook-form"

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
    <div>LoginScreen</div>
  )
}
