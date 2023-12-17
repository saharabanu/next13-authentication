import Link from "next/link"


const Navbar = () => {
  return (
    <div>
        <div className=" bg-white rounded border-gray-200 shadow-md">

            <div className="flex justify-center items-center py-4 px-20">
                <Link href="/">Auth</Link>
                <ul>
                    <li className="px-10">
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>

        </div>


    </div>
  )
}

export default Navbar