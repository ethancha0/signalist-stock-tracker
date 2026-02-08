'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"



const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () =>{
        router.push("/sign-in")
    }

    const user = { name: "John", email: "john@email.com"}


  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:yellow-500">
                <Avatar className = "h-8 w-8">
                    <AvatarImage src="http://github.com/shadcn.png" />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">CN
                        {user.name[0]}
                    </AvatarFallback>

                </Avatar>
            <div className="hidden md:flex flex-col items-start">
                <span className='text-base font-medium text-gray-400'>
                    {user.name}
                </span>

            </div>



            </Button> 
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>


      </DropdownMenu>
    </div>
  )
}

export default UserDropdown
