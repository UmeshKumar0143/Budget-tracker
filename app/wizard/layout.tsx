import { ReactNode } from "react";

export default function layout({children}:{children:ReactNode}){
        return <div className="relative flex justify-center items-center w-full h-screen">
        {children}
        </div>
}