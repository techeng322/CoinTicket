import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
    return (
        <button
            type="button"
            className="text-[14px] text-white rounded-lg cursor-pointer py-4 px-6 font-bold relative flex items-center gap-4 hover:bg-[#2C4369] w-full active:scale-[1.05]"
        >
            <CiLogout size={20}/>
            Logout
        </button>
    )
}

export default LogoutButton