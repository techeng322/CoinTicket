import Image from 'next/image'

const AnnounceSection = () => {
  return (
    <div className="w-full relative">
      <div className="w-full aspect-[871/198] relative">
        <Image
          src="/images/announce.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          className="rounded"
        />
        <div className="absolute font-poppins_blackitalic text-[22px] top-5 left-5 text-[#000000] text-[white]">
          “Top 5 Reasons to <br /> uses CoinTicket”
        </div>
      </div>
      <div className="w-[160px] aspect-[158/230] absolute right-[10px] bottom-[0px] z-[2]">
        <Image
          src="/images/announce_man.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          className="rounded w-[158px] aspect-[158/222]"
        />
      </div>
    </div>
  )
}

export default AnnounceSection
