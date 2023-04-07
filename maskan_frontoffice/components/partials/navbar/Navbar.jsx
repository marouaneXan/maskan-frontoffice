import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/maskan-logo.svg'

const Navbar = () => {
    return (
        <header className='mb-12 border-b'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                    <Image src={logo} alt="" className='w-[8rem] h-[6rem] object-fill' />
                </Link>
                <div className='flex items-center gap-6'>
                    <Link className='hover:text-violet-900 transition' href='/login'>
                        Login
                    </Link>
                    <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-[10px] rounded-lg transition' href='/register'>
                        Register
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar