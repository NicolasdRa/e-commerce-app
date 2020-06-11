import React from 'react'
import MenuDirectory from '../../ui/menu-directory/MenuDirectory'
import './Home.scss'

const Home = props => {
  console.log(props)
  return (
    <div className='homepage'>
      <MenuDirectory />
    </div>
  )
}
export default Home
