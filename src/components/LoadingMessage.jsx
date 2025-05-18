import React from 'react'
import { Spinner } from 'react-bootstrap'

export const LoadingMessage = () => {
  return (
    <>
    <div className='wrapper-spinner'>
        <Spinner animation='grow'/>
    </div>
    </>
   
  )
}
