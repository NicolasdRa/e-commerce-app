import React from 'react'
import MenuDirectory from '../../ui/menu-directory/MenuDirectory'
import './Home.scss'

const Home = props => {
  return (
    <div className='homepage'>
      <MenuDirectory props={props} />
    </div>
  )
}
export default Home
