"use client";

import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { user } = useAppSelector((state) => state.user);
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const updateWelcomeMessage = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        setTimeOfDay("Good Morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setTimeOfDay("Good Afternoon");
      } else if (currentHour >= 17 && currentHour < 20) {
        setTimeOfDay("Good Evening");
      } else {
        setTimeOfDay("Good Night");
      }
    };

    updateWelcomeMessage();

    const intervalId = setInterval(updateWelcomeMessage, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="bg-white  py-8 flex justify-center items-center  border-gray-200">
        <div className="px-10">
          <h2 className="text-2xl font-bold pb-3 text-cyan-900">{`${timeOfDay} ${user?.email}`}</h2>
          <h5 className="text-cyan-900 text-lg">
            Welcome To visit our website{" "}
          
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
