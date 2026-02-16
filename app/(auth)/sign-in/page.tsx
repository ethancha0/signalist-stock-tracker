"use client";

import { Button } from "@/components/ui/button";
import {useForm} from "react-hook-form";

const SignIn = () => {
    const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)




  return (
    <div>
        <h1 className="form-title">Sign Up & Personalize</h1>



    </div>
  )
}

export default SignIn
