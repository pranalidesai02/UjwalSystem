import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    
        <div className="flex flex-col md:flex-row items-center">
      <div className="flex items-center">
        <img src={assets.airplane} alt="Ujwal Systems Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-4xl font-bold text-blue-900">Ujwal Systems</h1>
      </div>
      <div className="mt-4 md:mt-0 md:ml-8">
        <img src={assets.add-icon} alt="Aeroplane" className="w-full h-auto" />
      </div>
    </div>
      
    
  )
}

export default Header
