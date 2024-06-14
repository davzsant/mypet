import { useState,useEffect } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";
import { iCartItem } from "@/types/item";

interface VisibilityProps {
    chat: boolean;
    log: boolean;
    cart: boolean;
}

interface cartProps{
    isVisible:boolean;
    handleVisible:(propSelected:keyof VisibilityProps,value:boolean) => void,
}

const CartProp:React.FC<cartProps> = ({isVisible,handleVisible}) =>{
    const [items,setItems] = useState<iCartItem[]>([
        {productName:"Racao Special Dog para cachorros de porte grande",price:10.50,imgPath:"/racao-specialdog.jpeg",cod:1125},
    ])
    const [isMobile,setIsMobile] = useState<boolean>(true)
    const [totalPrice,setTotalPrice] = useState<number>(0)

    useEffect(() => {
        let total = items.reduce((sum, item) => sum + item.price, 0);
        total.toFixed(2)
        setTotalPrice(total);
    }, [items])

    return(
        <div className="relative flex flex-col items-center">
                <AiOutlineShoppingCart className="bigButton" onClick={()=>handleVisible("cart",!isVisible)}/>
                <p className="text-xs">Meu carrinho</p>
                <span className="absolute top-0 right-1 text-white text-xs font-bold bg-thirdColor rounded-full p-1">{items.length}</span>
            <div className={"absolute top-[80%] bg-white text-black"+(isVisible?"":" hidden ")+(isMobile?"right-0":"")}>{items.length == 0?
                <p>Navegue pelas paginas para achar produtos incriveis para encher seu carrinho</p>
                    :<div className="p-2 rounded shadow-lg">
                        <p className="text-lg text-mainColor font-bold">Resumo da compra</p>
                        <div className="overFlow maxHeight">{items.map((item)=>(<CartItem {...item}/>))}</div>
                        <p className="border-t border-black my-2 px-10">Total:{totalPrice}</p>
                        <button className="bg-mainColor border rounded px-7 w-[100%] text-white dinnamicButton">Fazer pedido</button>
                    </div>}
            </div>
        </div>
    )
}

export default CartProp
