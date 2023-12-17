'use client'
import { createUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { SignUpFormInputs } from "@/types/globalTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter()
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormInputs>();
  const dispatch = useAppDispatch();

  const onSubmit = async (data:SignUpFormInputs) => {
    console.log(data)
    try {
      const res = await dispatch(createUser({ email: data.email, password: data.password }));
      console.log(res)
    
    if (res?.error?.code === "auth/email-already-in-use") {
      
      toast.error("Email is already in use. Please use a different email.");
    } else {
      toast.success("User created successfully");
    router.push("/");
     
    }
    } catch (error) {
      toast.error("something is wrong, An error occurred. Please try again later.")
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  mt-20">
          <h2 className="text-center text-xl pb-5 font-bold">Please Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                {...register("name")}
                name="name"
                type="text"
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black"
                id="exampleInput7"
                placeholder="Your Name"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                {...register("email")}
                name="email"
                type="email"
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black"
                id="exampleInput7"
                placeholder="Your Email"
              />
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                {...register("password")}
                name="password"
                type="password"
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black"
                id="exampleInput7"
                placeholder="Password"
              />
            </div>

            <input
              type="submit"
              value="Register"
              className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] cursor-pointer"
              data-te-ripple-init
              data-te-ripple-color="light"
            />
          </form>
          <br />
          <br />
          <p className="text-lg">
            Already Have an Account ? Please{" "}
            <Link href="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
