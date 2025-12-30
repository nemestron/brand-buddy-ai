"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className='p-5 shadow-sm flex justify-between items-center bg-white fixed w-full top-0 z-50'>
        <Link href="/" className='flex gap-2 items-center cursor-pointer'>
            <Image src='/logo.svg' alt='BrandBuddy' width={40} height={40} />
            <h1 className='font-bold text-xl text-primary'>BrandBuddy</h1>
        </Link>
        
        <div className='flex gap-4 items-center'>
            {isSignedIn ? (
                <>
                    <Link href="/dashboard">
                        <Button variant="ghost">Dashboard</Button>
                    </Link>
                    <UserButton />
                </>
            ) : (
                <Link href="/sign-in">
                    <Button>Get Started</Button>
                </Link>
            )}
        </div>
    </div>
  )
}

export default Header
