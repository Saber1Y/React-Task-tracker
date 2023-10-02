import React from 'react'
import PropTypes from 'prop-types'



const Header = ({ title, onAdd }) => {

    const onCLick = () => {
        console.log('click')
    }
  return (
    <header className='header'>
        <h1> {title} </h1>
        <button className='btn' onClick={onAdd} >Add</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Header.PropTypes = {
//     title: PropTypes.string,
// }

export default Header
