import "./style.css";
import applyText from "@/assets/apply-text.svg";
import Image from 'next/image';

export const ApplyCircleCursor = () => {
    return (
        <div className="cursor absolute">
            <div className={`flex justify-center items-center ball`}>
                <div className="insideText">
                    <Image src={applyText} alt="Apply" width={66} height={63} />
                </div>
            </div>
        </div>
    )
}