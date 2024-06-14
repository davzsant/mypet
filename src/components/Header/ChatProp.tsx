import React,{useState} from 'react'
import Link from 'next/link';

/*React Icons */
import { BsChatFill, BsTelephoneOutboundFill  } from "react-icons/bs"
import { IoChatboxOutline } from "react-icons/io5";
import { MdEmail} from "react-icons/md";
import { FaShop,FaHeadset } from "react-icons/fa6";

interface VisibilityProps {
    chat: boolean;
    log: boolean;
    cart: boolean;
}

interface chatProps{
    isVisible:boolean;
    handleVisible:(propSelected:keyof VisibilityProps,value:boolean) => void,
}


const ChatProp:React.FC<chatProps> = ({isVisible,handleVisible}) => {

    return (
        <button>
            <div className="flex flex-col items-center" >
                <IoChatboxOutline className="bigButton bg-blackBlue"  onClick={()=>handleVisible("chat",!isVisible)}/>
                <p className="text-xs">Atendimento</p>
                {isVisible &&
                <nav className="absolute top-[80%] bg-white text-black">
                    <ul className="ulAlign p-3 border rounded">
                        <li><Link href={"/chat"}><BsChatFill/><p>Chat</p></Link></li>
                        <li><Link href={"/email"}><MdEmail/><p>Email</p></Link></li>
                        <li><Link href={"/atendimento"}><FaHeadset/><p>Fale Conosco</p></Link></li>
                        <li><Link href={"/televendas"}><BsTelephoneOutboundFill/><p>Televendas</p></Link></li>
                        <li><Link href={"/lojas"}><FaShop/><p>Lojas</p></Link></li>
                    </ul>
                </nav>}
            </div>
        </button>
    )
}

export default ChatProp
