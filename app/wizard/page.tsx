import { CardCombobox } from "@/components/CardCombobox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server"
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { redirect } from "next/navigation";

export default  async  function Page(){
    const user = await currentUser()
    if(!user){
        redirect('/sign-in');
    }

    return <div className="container flex max-w-2xl justify-between items-center flex-col gap-4">
        <div className="flex flex-col justify-between items-center  gap-4 ">
        <h1 className="text-5xl  font-medium tracking-wide">Welcome ,<span className="font-bold ml-2  ">{user?.firstName}! 👋</span> </h1>
        <h2 className="text-xl   text-muted-foreground ">Let's get started by setting up your currency </h2>
        <h2 className="text-xl   text-muted-foreground ">You can change these settings any time </h2>
        </div>
        <Separator/>
        <Card className="w-full ">
            <CardHeader>
                <CardTitle>Currency</CardTitle>
                <CardDescription >Set your default currency for transaction</CardDescription>
            </CardHeader>
            <CardContent>
                <CardCombobox/>
            </CardContent>
        </Card>
        <Separator/>
        <Button className="w-full" asChild>
            <Link href={'/'}>
            I&apos;m done! Take me to the dashboard 
            </Link>
            </Button>
        <div className="mt-8">
            <Logo/>
        </div>
    </div>
}