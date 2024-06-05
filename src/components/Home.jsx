import React from 'react'
import Header from './Header'
import Card from './Card'
import { Outlet } from "react-router-dom";


export default function Home() {
  return (
    <>
      <div className="w-screen bg-green-600">
        <Header />
      </div>
      <Outlet />
    </>
  )
}
