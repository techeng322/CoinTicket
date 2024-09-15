import Image from 'next/image'

const Logo = () => {
  return (
    <div className="mt-4 w-full flex justify-center items-center cursor-pointer">
      <Image src="/images/logo.png" alt="" width={100} height={100} />
    </div>
  )
}

export default Logo
