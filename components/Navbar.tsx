"use client"
import { usePathname, } from "next/navigation"
import Logo, { MobileLogo } from "./Logo"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { UserButton } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar(){
    return <div>
        <DesktopNavbar/> 
        <MobileNavbar/>  
    </div>
}

const Navitems = [
    {title: "Dashboard", to: '/'},
    {title:"Transaction", to: '/transaction'}, 
    {title:"Manage", to:"/manage" }
]

function DesktopNavbar(){
    return <div className="hidden md:block border-separate    border-b bg-background px-8 py-2 ">
            <div className="container flex items-center  justify-between ">
                <div className="flex h-[80px] min-h-[60px] w-full  justify-between items-center gap-8">
                        <Logo/> 
                    <div className="flex h-full gap-8">
                        {Navitems.map(item=>
                            <Navlink
                                title={item.title}
                                to= {item.to}
                                key={item.title}
                            />
                        )}
                    </div>
                    <div className="flex justify-between items-center gap-5">
                    <ThemeSwitcher/> 
                    <UserButton afterSignOutUrl="sign-in" />
                    </div>
                </div>

            </div>
    </div>
}

function MobileNavbar(){
    const [isOpen , setisOpen] = useState(false); 
    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth >=760){
                setisOpen(false)
            }
        }

        window.addEventListener("resize",handleResize);
        handleResize(); 

        return () => window.removeEventListener("resize",handleResize); 

        })
    return <div className="block border-separate bg-background md:hidden">
            <div className="container flex items-center justify-between gap-2 px-6 py-2 ">
                    <Sheet  open={isOpen} onOpenChange={setisOpen}  >
                        <SheetTrigger asChild>
                            <Button variant={"ghost"} size={"icon"}><Menu/></Button>
                        </SheetTrigger>
                        <SheetContent className="w-[350px] sm:w-[540px]" side={"left"} >
                           <SheetTitle> <Logo/> </SheetTitle>
                            <div className="flex flex-col gap-2 pt-3 ">
                                {Navitems.map(item=>
                                    <Navlink
                                        title={item.title}
                                        to={item.to}
                                        key={item.title}
                                        onLinkClick = {()=>setisOpen((prev)=>!prev)}
                                    />
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <MobileLogo/>
                    <div className="flex justify-between items-center ">
                    <ThemeSwitcher/> 
                    <UserButton afterSignOutUrl="sign-in" />
                    </div>
            </div>
    </div>
}

function Navlink({title, to ,onLinkClick}:{title:string, to:string, onLinkClick?:()=>void}){

    const pathName = usePathname()
    const isActive = pathName === to; 

    return <div className="relative flex items-center">
            <Link onClick={()=>{    
                if(onLinkClick) onLinkClick(); 
            }} href={to} className={cn( buttonVariants({variant:"ghost"}), "w-full text-2xl  text-muted-foreground justify-start", isActive && "text-foreground")}>{title}</Link>
    { isActive && <div className="absolute bg-foreground -bottom-[2px] hidden md:block -translate-x-1/2 left-1/2 h-[2px] w-[80%] rounded-xl "></div>}
    </div>
}