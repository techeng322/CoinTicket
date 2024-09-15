import Image from "next/image"

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
                    className='rounded'
                />
            </div>
            <div className="w-[160px] aspect-[158/230] absolute right-[10px] bottom-[0px] z-[2]">
                <Image
                    src="/images/announce_man.png"
                    alt=""
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    unoptimized
                    className='rounded w-[158px] aspect-[158/222]'
                />
            </div>
        </div>
    )
}

export default AnnounceSection