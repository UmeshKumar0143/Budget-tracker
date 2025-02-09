import { FaSackDollar } from "react-icons/fa6";


export default function Logo(){
    return <a href="/" className="flex items-center gap-2"> 
            <FaSackDollar className="h-11 w-11 text-amber-500 stroke-[1.5]"  />
            <p className="text-4xl font-bold tracking-tight bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500  leading-tight  text-transparent">BudgetTracker</p>
 </a> 
}

export function MobileLogo(){
    return <a href="/" className="flex items-center gap-2"> 
            <p className="text-4xl font-bold tracking-tight bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500  leading-tight  text-transparent">BudgetTracker</p>
 </a> 
}