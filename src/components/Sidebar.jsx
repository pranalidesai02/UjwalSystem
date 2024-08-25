import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start space-y-4 p-4 bg-gradient-to-b from-yellow-500 via-green-500 to-blue-500">
      <div className="flex items-center space-x-2">
        <img src={assets.add_icon} alt="Services" className="w-8 h-8" />
        <span className="text-white font-bold">Services</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.add_icon} alt="Solution" className="w-8 h-8" />
        <span className="text-white font-bold">Solution</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.add_icon} alt="Contacts" className="w-8 h-8" />
        <span className="text-white font-bold">Contacts</span>
      </div>
    </div>
  )
}

export default Sidebar
