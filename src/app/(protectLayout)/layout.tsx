/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Navbar from "@/components/layout/ui/Navbar";
import { useAppSelector } from "@/redux/hooks";
import { useRouter ,redirect} from "next/navigation";
import { useEffect, useState } from "react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {user,isLoading} =  useAppSelector((state)=>state.user)
    if(isLoading){
         return <h5>loading.............</h5>


    }

    useEffect(() =>{
        if(!user?.email){
            router.push("/login")
        }
    },[user, router])

    
    
      if (isLoading || loading) {
        return <h5>Loading...</h5>;
      }
    
  return (
    <>
    {children}
    </>
  );
}
