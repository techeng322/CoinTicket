import useClickOutside from "@/hooks/useClickOutsite";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";


interface NotificationProps {
    isVisible: boolean;
    onClose: () => void;
    containerClasses: string;
}

const Notification: React.FC<NotificationProps> = ({ isVisible, onClose, containerClasses }) => {
    if (!isVisible) return null;
    const { ref } = useClickOutside(() => onClose())

    return (
        isVisible &&
        <div className={`w-[450px] h-[600px] bg-[#192943] ${containerClasses} z-[100] shadow-[1px_1px_5px_5px_#00000036] rounded-lg transition-[10]`} ref={ref}>
            <div className="flex border-b-[1px] border-b-[white] mt-4 p-4 justify-end">
                <button type="button" onClick={onClose}>
                    <IoMdClose color="white" size={16} className="mr-2" />
                </button>
            </div>
            <div className="px-8 py-4 flex flex-col gap-4">
                <div className="rounded-lg bg-[#213759] flex px-10 justify-between items-center py-2">
                    <button className="bg-[#192943] rounded px-2 py-1 text-white text-[14px]">View All</button>
                    <button className="bg-[#192943] rounded px-2 py-1 text-white text-[14px]">Verified</button>
                    <button className="bg-[#192943] rounded px-2 py-1 text-white text-[14px]">Mentors</button>
                </div>
                <div className="rounded-lg bg-[#213759] flex px-10 items-center py-4 gap-4">
                    <div className="w-[40px] aspect-[1/1] relative">
                        <Image src="/images/profile_img.png"
                            alt=""
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            unoptimized
                            className='rounded' />
                    </div>

                    <div className="text-white text-[14px]">
                        Rifat You Won the Race!
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Notification;