import React from 'react'
import Ping from './Ping'

const View = ({id} : {id: string}) => {
  return (
    <div className='view-container'>
      <div className="absolut -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="capitalize">100 views</span>
      </p>
    </div>
  )
}

export default View
