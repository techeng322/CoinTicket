import PropTypes from 'prop-types';
import { IoMdClose } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import { MdOutlineInsights } from "react-icons/md";




const PostModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[20]"
            onClick={onClose}
        >
            <div
                className="bg-white p-4 w-full absolute bottom-0 h-[300px] flex justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent click events inside modal from closing it
            >
                <div className="absolute bottom-[100%] right-[100px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
                <button type="button" className='absolute top-[30px] right-[100px]' onClick={onClose}>
                    <IoMdClose size={20} />
                </button>
                <div className="mt-8 bg-[#F3F3F3] w-[400px] h-[150px] flex justify-around pt-8 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <button className="rounded-full bg-[white] p-2 flex justify-center items-center hover:mb-2 transition-[2]">
                            <IoTicket size={20} color={'black'} />
                        </button>
                        <div className="font-poppins_medium text-[14px]">Ticket</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="rounded-full bg-[#0A1B36] p-2 flex justify-center items-center hover:mb-2 transition-[2]">
                            <BiPoll size={20} color={'white'} />
                        </button>
                        <div className="font-poppins_medium text-[14px]">Polls</div>
                    </div>
                    <div className="flex flex-col gap-2 w-[36px] h-[36px]">
                        <button className="rounded-full bg-[white] p-2 flex justify-center items-center hover:mb-2 transition-[2]">
                            <MdOutlineInsights size={20} color={'black'} />
                        </button>
                        <div className="font-poppins_medium text-[14px]">Insights</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PostModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PostModal;