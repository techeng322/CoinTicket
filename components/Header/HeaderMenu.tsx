const HeaderMenu = () => {
  return (
    <div className="flex gap-2">
      <button className="text-black bg-white rounded px-4 py-1 font-poppins_medium active:scale-[1.04] text-[14px]">
        Home
      </button>
      <button className="text-black bg-white rounded px-4 py-1 font-poppins_medium active:scale-[1.04] text-[14px]">
        Rewards
      </button>
      <button className="text-black bg-white rounded px-4 py-1 font-poppins_medium active:scale-[1.04] text-[14px]">
        Expert
      </button>
    </div>
  )
}

export default HeaderMenu
