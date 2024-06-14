import Link from "next/link"

const LoginProp = () =>{
    return(
        <form className="bg-white rounded flex flex-col space-y-3 shadow-lg p-2">
            <p className="text-mainColor text-lg font-bold">Acesse sua conta</p>
            <div className="border-t">
                <p className="font-bold">Logar</p>
                <input type="email" name="user_email" placeholder="Seu email:" className="text-sm border rounded p-1 my-1" />
                <input type="password" name="user_password" placeholder="Insira sua senha:" className="text-sm border rounded p-1 my-1"/>
                <Link href={"/resetpassword"}><p className="text-xs dinnamicText">Esqueceu sua senha?</p></Link>
                <button className="bg-mainColor border rounded px-7 w-[100%] text-white dinnamicButton">Logar</button>
                <button className="bg-[#3b5998] border rounded px-7 w-[100%] text-white text-nowrap dinnamicButton">Logar pelo facebook</button>
            </div>

            <div className="border-t"> 
                <p className="font-bold">Nao tem uma conta?</p>
                <button className="bg-mainColor border rounded px-7 w-[100%] text-white dinnamicButton">Criar conta</button>
                <p className="text-xs">Ao criar uma conta voce tem varios descontos e frete gratis acima de R$100</p>
            </div>
    </form>
    )
}

export default LoginProp