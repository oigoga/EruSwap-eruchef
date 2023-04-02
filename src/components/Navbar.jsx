import React from 'react'
import {Eruswap, Arrow } from '../assets/General/assets'
const Navbar = () => {
  return (
    <>
        <div className='flex justify-around py-6  font-Bakbak '>
            <div><img src={Eruswap} alt="" className='h-14'/></div>
            <div className='pt-4'>
                <ul className='flex justify-around'>
                    <li className='flex mx-4'><p className='mx-1'>Home</p><img className='h-1.5 w-2.5 mt-2.5' src={Arrow} alt="" /></li>
                    <li className='mx-4'>NFT</li>
                    <li className='mx-4'>Vote</li>
                    <li className='mx-4'>About Us</li>
                    <li className='mx-4'>Contact Us</li>
                    <li className='flex mx-4'><p className='mx-1'>Eruchefs</p><img className='h-1.5 w-2.5 mt-2.5' src={Arrow} alt="" /></li>
                </ul>
            </div>
            <div className='pt-2'> <button className='bg-violet rounded-md py-2 px-5'>
                Connect Wallet
            </button> </div>
        </div>
    </>
  )
}

export default Navbar