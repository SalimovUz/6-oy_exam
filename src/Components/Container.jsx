import React from 'react'
import Sidebar from './Sidebar'
import Center from './Center'

const Container = () => {
  return (
    <div>
      <div className="container flex">
        <Sidebar/>
        <Center/>
      </div>
    </div>
  )
}

export default Container