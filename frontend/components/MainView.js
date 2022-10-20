import React from 'react'
import Signup from './Signup'

let isAccount = false

const MainView = () => {
  return (
    <>
        {isAccount ? (
          <div>
            Tiktoks will go here
          </div>
        ):(
          <Signup/>
        )}
    </>
  )
} 

export default MainView