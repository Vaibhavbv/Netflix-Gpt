import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='w-full absolute px-8 py-3 bg-gradient-to-b from-black z-10'> 
      <img src={LOGO} alt="Netflixlogo" className="w-44 " />
    </div>
  )
}

export default Header
