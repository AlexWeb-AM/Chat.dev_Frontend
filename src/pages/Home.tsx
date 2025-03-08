import React from 'react'
import { NavBar } from '../components/NavBar'
import { HeaderUser } from '../components/HeaderUser';
import { MainComonent } from '../components/MainComonent';

export const Home = () => {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex flex-col w-full'>
      <HeaderUser />
      <MainComonent />
      </div>
    </div>
  )
}
