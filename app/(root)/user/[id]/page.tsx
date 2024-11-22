import React from 'react'

const UserDetails = async ({ params } : { params: Promise<{id: string}> }) => {
    const id = (await params).id
  return (
    <div>
      {`User Id is: ${id}`}
    </div>
  )
}

export default UserDetails
