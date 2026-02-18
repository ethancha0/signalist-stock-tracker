"use client";

import FooterLink from "@/components/forms/FooterLink";
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
        <h1 className="form-title">Welcome Back</h1>
      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5"> 
          <InputField
              name="email"
              label="Email"
              placeholder="jdoe@uci.edu"
              register={register}
          />
          <InputField
              name="password"
              label="Password"
              placeholder=""
              register={register}
          />

          <Button type="submit" className="yellow-btn w-full mt-5">
            Log in 

          </Button>


        </form>

        <FooterLink
        text="Don't have an Account? "
        linkText="Create One"
        href={"/sign-up"}
        
        />


    </div>
  )
}

export default SignIn
