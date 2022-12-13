import React from 'react'
import Header from '../header/header'

export default function Layout(props) {
  return (
    <div style = {{height:"100%"}}>
        <Header/>
        <div style = {{marginTop:"0px"}}>
          {props.children}
        </div>
    </div>
  )
}
