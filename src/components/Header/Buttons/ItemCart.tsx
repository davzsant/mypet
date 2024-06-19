import Image from "next/image"
import { IoTrash } from "react-icons/io5";

import { iCartItem } from "@/types/item";

const CartItem: React.FC<iCartItem> = ({productName,price,imgPath,cod})=>{
    return(
        <div className="border-t my-1 mx-1 p-2 flex text-xs items-center">
            <div className="relative">
                <Image src={imgPath} alt={"Produto:"+productName} width={50} height={50}/>
                <button className="absolute top-0 left-0"><IoTrash/></button>
            </div>

            <div>
                <p>{productName}</p>
                <p className="text-base">R${price}</p>
            </div>
        </div>
    )
}

export default CartItem