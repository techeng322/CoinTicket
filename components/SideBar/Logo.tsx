import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="mt-4 w-full flex justify-center items-center cursor-pointer py-4">
      <Link href="/" className="relative w-[189px] h-[31px] relative">
        <Image
          src="/images/logo424.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          className="rounded"
        />
      </Link>
    </div>
  )
}

export default Logo
