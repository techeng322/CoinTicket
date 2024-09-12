const Post = () => {
    return (
        <div className="w-full h-[300px] text-center flex flex-col items-center">
            <div className="border border-black w-[100px] h-[100px]"></div>
            <div className="mt-4">
                <div className="text-[18px] font-bold">Create a Post</div>
                <div className="text-center">
                    Spark a discussion by sharing your thoughts about stocks, investing and finance.
                </div>
            </div>
            <div className="mt-4">
                <button className="w-[150px] px-4 py-2 bg-[#b5cff9] text-[#1646cd] font-bold" type="button">
                    Start Writing
                </button>
            </div>
        </div>
    )
}

export default Post