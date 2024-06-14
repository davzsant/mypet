import React,{useState} from 'react'
import LoginProp from './LoginProp'

import Link from 'next/link';

import { MdOutlinePerson } from "react-icons/md";

interface VisibilityProps {
  chat: boolean;
  log: boolean;
  cart: boolean;
}

interface logProps{
  isVisible:boolean;
  handleVisible:(propSelected:keyof VisibilityProps,value:boolean) => void,
}

const LogProp:React.FC<logProps> = ({isVisible,handleVisible}) => {
    const [isConnected,setIsConnected] = useState<boolean>(false)
    const [isMobile,setIsMobile] = useState<boolean>(true)
  return (
    <div className="flex flex-col items-center">
        <MdOutlinePerson className="bigButton" onClick={()=>handleVisible("log",!isVisible)}/>
        <p className="text-xs">{isConnected?"Minha conta":"Fazer Login"}</p>
        {isVisible&&
        <div className={"absolute top-[80%] "+(isMobile?"right-5":"")}>
            {isConnected? <Link href="myaccont" className='p-2 rounded-full bg-thirdColor text-white dinnamicButton'>Minha conta</Link> : <LoginProp/>}
        </div>
        }
    </div>
  )
}

export default LogProp
