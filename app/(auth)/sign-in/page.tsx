"use client";

import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import {useForm} from "react-hook-form";

const SignIn = () => {
    const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues:{
      email: "",
      password: "",

    },
    mode: 'onBlur'
  },
)

const onSubmit = async (data: SignInFormData) =>{
  try{
    console.log(data)
}
  catch(e){
    console.log(e)
  }

}





  return (
    <div>
        <h1 className="form-title">Sign in</h1>
      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5"> 
          <InputField
              name="username"
              label="Email"
              placeholder="jdoe@uci.edu"
              register={register}
             // error={errors.fullName}
             // validation={{ required: 'email is invalid', minLength: 2}}
          />
          <InputField
              name="password"
              label="Password"
              placeholder=""
              register={register}
             // error={errors.fullName}
              //validation={{ required: 'password is invalid', minLength: 2}}
          />

          <Button type="submit" className="yellow-btn w-full mt-5">
            Log in 

          </Button>


        </form>



    </div>
  )
}

export default SignIn
