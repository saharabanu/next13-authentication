'use client'
import { loginUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { LoginFormInputs } from "@/types/globalTypes";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const LoginPage = () => {
  const { register, handleSubmit,formState: { errors } } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [password, setPassword] = useState<string>("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 
  const dispatch =  useAppDispatch();
  const router = useRouter();

  // const from = location?.state?.from?.pathname || "/";
  
  const { user, isLoading, isError } = useAppSelector(
    (state: { user: any }) => state.user
  );
  useEffect(() => {
    if (user.email && !isLoading) {
      router.push('/')
      toast.success("User loggedin Successfully");
    }
  }, [user.email,isLoading, router]);
  if (isError) {
    toast.error("Your email or password is incorrect.Please, give valid registered email and password");
  }

  const onSubmit = (data:LoginFormInputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  mt-20">
          <h2 className="text-center text-xl pb-5 font-bold">Please Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                {...register("password")}
                name="password"
                type="password"
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black"
                id="exampleInput7"
                placeholder="Password"
              />
            </div> */}
            <div className="relative w-80 mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-4 py-2   rounded"
                >
                  {showPassword ? <VscEyeClosed /> : <VscEye />}
                </button>
              </div>

            <input
              type="submit"
              value="Login"
              className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] cursor-pointer"
              data-te-ripple-init
              data-te-ripple-color="light"
            />
          </form>
          <br />
          <br />
          <p className="text-lg">
            Don't Have an Account ? Please{" "}
            <Link href="/register" className="text-blue-700">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
