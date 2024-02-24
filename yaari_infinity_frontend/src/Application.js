import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './app/authentication/components/Login'
import Dashboard from './app/dashboard/components/Dashboard'


const Application = () => {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default Application