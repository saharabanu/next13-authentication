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
  // console.log(user)

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
      <div className=" bg-white rounded border-b-gray-200 shadow-md sticky top-0 right-0 ">
        <div className="flex justify-center items-center py-2 px-20 text-xl ">
          <Link href="/">Auth</Link>
          <ul>
            {user?.email ? (
              <div className="flex items-center space-x-4 ">
                <li className="pl-5">
                <Link href="/profile" className="hover:text-blue-800">Profile</Link>
              </li>
                <p className="">{user?.email} </p>
                <button onClick={handleLogout} className="bg-blue-400 rounded px-5 py-1 text-white text-md cursor-pointer hover:bg-blue-950">Logout</button>
              </div>
            ) : (
              <li className="px-10">
                <Link href="/login" className="hover:text-blue-800">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
