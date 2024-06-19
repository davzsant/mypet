
/*React Utils */
import { useState } from "react"
import Image from "next/image"

/*Componentes*/
import SearchForm from "./SearchForm"
import ChatProp from "./Buttons/ChatProp"
import LogProp from "./Buttons/LogProp"
import CartProp from "./Buttons/CartProp"
import Categories from "./Category/Categories"

/*React Icons */

import { MdMenu } from "react-icons/md";


interface VisibilityProps {
    chat: boolean;
    log: boolean;
    cart: boolean;
}/*Para tipar os state visibilityProps  */


export default function Header(){
    const [isMobile,setIsMobile] = useState(true)
    const [isActive,setIsActive] = useState<boolean>(true)
    const [visibilityProps,setVisibilityProps] = useState<VisibilityProps>({ chat: false, log: false, cart: false})

    const handleVisibility = (propSelected:keyof VisibilityProps,value:boolean)=>{
        setVisibilityProps({
            chat:false,
            log:false,
            cart:false,
            [propSelected]: value
        });
    }
    
    return(
        <header className="flex justify-center items-center flex-col header">
            <div className="flex justify-center items-center bg-mainColor py-1 space-x-4 w-[100%]">
                <Image src={"/logo-mypet.jpg"} alt="Logo da empresa" className="logoImage rounded-full" width={120} height={120}/>
                <SearchForm isMobile={isMobile}/>
                <div className="flex justify-around space-x-2 items-start relative">
                    {!isMobile&&<ChatProp isVisible={visibilityProps.chat} handleVisible={handleVisibility}/>}
                    <LogProp isVisible={visibilityProps.log} handleVisible={handleVisibility}/>
                    <CartProp isVisible={visibilityProps.cart} handleVisible={handleVisibility}/>
                    {isMobile&&<button onClick={()=>{
                        setIsActive(!isActive)
                        console.log(isActive)
                        }}><MdMenu className="bigButton"/></button>}
                </div>
            </div>
           <Categories isActivated={isActive}/>
        </header>
    )
}