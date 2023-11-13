import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SelectUser } from '@/redux/auth/authSlice'
function page() {

    const user = useSelector(SelectUser);
  return (
    <>
        

        Welcome {user.email}




    </>
  )
}

export default page