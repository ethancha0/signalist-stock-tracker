import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Navitems from "@/components/Navitems"
import UserDropdown from './UserDropdown'

const header = () => {
  return (
    <header className="sticky top=-0 header">
        <div className ="container header-wrapper">
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32}
                    className="h-8 w-auto cursor-pointer"
                />
            </Link>
                {/* hidden on desktop, only display on mobile */}
                <nav className="hidden sm:block">
                    <Navitems/>
                </nav>

                <UserDropdown/>

            
        </div>
    </header>
  )
}

export default header
