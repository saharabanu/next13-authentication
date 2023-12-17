"use client";
import { auth } from "@/libs/firebase";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();

  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setUser(null));
        toast.success("user Logout Successfully");
        router.push("/register");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <div className=" bg-white rounded border-gray-200 shadow-md">
        <div className="flex justify-center items-center py-4 px-20">
          <Link href="/">Auth</Link>
          <ul>
            {user?.email ? (
              <div className="flex items-center ">
                <li className="px-10">
                <Link href="/profile">Profile</Link>
              </li>
                <p className="px-10">{user?.email} </p>
                <button onClick={handleLogout} className="bg-blue-400 rounded px-5 py-2 text-white text-md cursor-pointer">Logout</button>
              </div>
            ) : (
              <li className="px-10">
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
