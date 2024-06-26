import React from 'react'
import Link from 'next/link';

import { FaTruck, FaCreditCard ,FaBarcode, FaPhoneAlt   } from "react-icons/fa";

interface iIcons{
    id:string;
    icon: React.ReactNode,
    message:string;
    shortMessage:string;
    link:string;
    linkPath:string;
}

const Icons:iIcons[] = [
    {
        id:"TruckSection",
        icon:<FaTruck color='#315CF5' size={40}/>,
        message:"Entregamos na sua casa! Compra Gratis para mais de R$100",
        shortMessage:"Fazemos entrega!",
        link:"Confira as regras",
        linkPath:"/regras-transporte"
    },
    {
        id:"CardSection",
        icon:<FaCreditCard color='#315CF5' size={40}/>,
        message:"Você pode parcelar em até 6x sem juros",
        shortMessage:"Parcele em até 6x",
        link:"Confira as regras",
        linkPath:"/regras-parcelamento"
    },
    {
        id:"CodebarSection",
        icon:<FaBarcode color='#315CF5' size={40}/>,
        message:"Você ganha um desconto de 10% na primeira compra!",
        shortMessage:"-10% na 1°compras",
        link:"Saiba Mais",
        linkPath:"/cupons"
    },
]


const Banner = () => {

    return (
    
        <div className='w-[100%] flex justify-center items-center lg:space-x-[10%] my-[4%] 
        sm:flex-wrap lg:flex-nowrap py-4'>
            {Icons.map((icon:iIcons):React.ReactElement=>{
                return(
                    <div className='flex items-center sm:w-[100%] lg:w-[20%] border rounded border-mainColor px-2 py-5'>
                        <div>{icon.icon}</div>
                        <div className='mx-5'>
                            <p className='text-[#666]'>{icon.shortMessage}</p>
                            {<Link href={icon.linkPath}><p className='text-[#111111] hover:underline'>{icon.link}</p></Link>}
                        </div>
                    </div>
                )
            })}
            <div className='flex items-center sm:w-[100%] lg:w-[20%] border rounded border-mainColor px-2 py-5'>
                <FaPhoneAlt size={40} color='#315CF5'/>
                <div className='text-[#666] flex flex-col mx-5 '>
                    <p>TELEVENDAS:41 91234 5678</p>
                    <Link href={"/televendas"}><p className='text-[#111111] hover:underline'>Mais sobre televendas</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
