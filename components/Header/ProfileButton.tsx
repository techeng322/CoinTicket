import Image from 'next/image'

const ProfileButton = () => {
  return (
    <button type="button" className="rounded-full relative">
      <div className="w-[35px] h-[35px] relative">
        <Image
          src="/images/profile_img.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          className="rounded"
        />
      </div>
    </button>
  )
}

export default ProfileButton
