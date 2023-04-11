import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/maskan-logo.svg'
import { AuthContext } from '@/context/auth'

const Navbar = () => {
    const { logout } = useContext(AuthContext)
    const loggedIn = () => {
        if (typeof localStorage !== 'undefined') {
          const token = localStorage.getItem('token')
          const client_id = localStorage.getItem('client_id')
          if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]))
            if (payload) {
              return client_id === payload.id
            }
          }
        } else {
          return false
        }
      }
    return (
        <header className='mb-12 border-b'>
            <form> {/* Move the form element outside of the div element */}
                <div className="container mx-auto flex justify-between items-center">
                    <Link href='/'>
                        <Image src={logo} alt="" className='w-[8rem] h-[6rem] object-fill' />
                    </Link>
                    <div className='flex items-center gap-6'>
                        {loggedIn() ? (
                            <button type='button' onClick={logout} className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-[10px] rounded-lg transition'>
                                Sign out
                            </button>
                        ) : (
                            <>
                                <Link className='hover:text-violet-900 transition' href='/auth/login'>
                                    Login
                                </Link>
                                <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-[10px] rounded-lg transition' href='/auth/register'>
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </header>
    )
}

export default Navbar
