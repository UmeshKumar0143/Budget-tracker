import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

export default function layout({children}:{children:ReactNode}){
    return <div className="w-full h-screen ">
        <Navbar/> 
        <div>
            {children}
        </div>
    </div>
}