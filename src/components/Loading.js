import React from 'react'
import { SyncLoader } from "react-spinners";

export default function Loading(props) {
  return (
    <div className='loading'>
      <SyncLoader
        size={10}
        color='green'
        loading={props.loading}
      />
    </div>
  )
}
