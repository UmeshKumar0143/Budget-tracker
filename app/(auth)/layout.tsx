import { ReactNode } from "react";
import Logo from "../../components/Logo";

export default function layout({children}:{children:ReactNode}){
    return <div className="h-screen w-screen flex flex-col  relative gap-12 justify-center items-center">
        <Logo/>
        {children}
    </div>
}