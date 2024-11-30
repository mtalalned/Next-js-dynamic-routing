import React from 'react'

const SingleUser = ({params:{id}}) => {
  
  console.log (id)
  
    return (
    <div>
        <p>Single User {id}</p>
    </div>
  )
}

export default SingleUser
