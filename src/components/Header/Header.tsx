
import {useState } from "react"

import Image from "next/image"

import ChatProp from "./ChatProp"
import LogProp from "./LogProp"
import CartProp from "./CartProp"

import {BsSearch} from "react-icons/bs"
import {MdMenu} from "react-icons/md";

interface VisibilityProps {
    chat: boolean;
    log: boolean;
    cart: boolean;
}

export default function Header(){
    const [isMobile,setIsMobile] = useState(false)

    const [visibilityProps,setVisibilityProps] = useState<VisibilityProps>({
        chat: false,
        log: false,
        cart: false
    })

    const handleVisibility = (propSelected:keyof VisibilityProps,value:boolean)=>{
        setVisibilityProps({
            chat: false,
            log: false,
            cart: false,
            [propSelected]: value
        });
    }
    
    return(
        <header className="flex justify-center items-center bg-mainColor py-1 space-x-4">
            <Image src={"/logo-mypet.jpg"} alt="Logo da empresa" width={100} height={100} className="rounded-full bg-center"/>
            <form action="" method="get" className="relative">
                <input className="searchInput" type="search" placeholder="Pesquisa os produtos que deseja procurar"/>
                <button className="absolute centerItem right-3 bg-secondColor p-1 rounded-full text-white shadow-lg">{isMobile?<BsSearch/>:"BUSCAR"}</button>
            </form>
            <div className="flex justify-around space-x-2 items-start relative">
                <ChatProp isVisible={visibilityProps.chat} handleVisible={handleVisibility}/>
                <LogProp isVisible={visibilityProps.log} handleVisible={handleVisibility}/>
                <CartProp isVisible={visibilityProps.cart} handleVisible={handleVisibility}/>
                {isMobile&&<button><MdMenu className="bigButton"/></button>}
            </div>
        </header>
    )
}