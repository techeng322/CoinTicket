import Image from 'next/image'

const Insights = () => {
  return (
    <div className="w-full h-[300px] text-center flex flex-col items-center">
      <div className="w-[150px] aspect-[1/1] relative">
        <Image
          src="/images/insights.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          className="rounded"
        />
      </div>
      <div className="mt-4">
        <div className="text-[14px] font-bold">Share an Insight</div>
        <div className="text-center text-[12px]">
          Share your views about crypto, investing and finance
        </div>
      </div>
      <div className="mt-4">
        <button
          className="w-[150px] px-4 py-2 bg-[#D9D9D9] text-[black] font-bold active:scale-[1.05]"
          type="button"
        >
          Start Writing
        </button>
      </div>
    </div>
  )
}

export default Insights
