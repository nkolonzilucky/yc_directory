import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center '>
        <Link href={'/'} >
            <Image src={'/logo.png'} alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
               <>
                    <Link href={'/startup/create'}>
                        <span>Create</span> 
                    </Link>
                    <form action={
                      async () => {
                        "use server"
                        await signOut({redirectTo:"/"})
                      }
                    }>
                        <button type='submit'>Logout</button>
                    </form>
                    <Link href={`/user/${session?.user?.id}`} >
                    <span>{session?.user?.name}</span>
                    </Link>
               </> 
            ) : (
              <>
                <form action={async () => {
                  "use server"
                  try {
                    await signIn('github', {redirectTo: 'http://127.0.0.1:3000/'})
                    
                  } catch (error) {
                    console.log(error)
                  }
                }}>
                    <button type='submit'>
                    <span>Login</span>
                    </button>
                </form>
                <Link href={'/startup/create'}>
                    <span>Create</span> 
                </Link>
                <Link href={'/studio'}>
                <span>studio</span>
                </Link>
              </>
            )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
