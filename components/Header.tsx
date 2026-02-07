import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Navitems from "@/components/Navitems"

const header = () => {
  return (
    <header className="sticky top=-0 header">
        <div className ="container header-wrapper">
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32}
                    className="h-8 w-auto cursor-pointer"
                />

                {/* hidden on desktop, only display on mobile */}
                <nav className="hidden sm:block">
                    <Navitems/>
                </nav>




            </Link>
        </div>
    </header>
  )
}

export default header
