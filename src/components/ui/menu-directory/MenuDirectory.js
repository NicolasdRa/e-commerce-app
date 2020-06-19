import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directorySelector'
import MenuItem from '../menu-item/MenuItem'
import './MenuDirectory.scss'

const MenuDirectory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStatetoProps)(MenuDirectory)
