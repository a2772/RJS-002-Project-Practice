import { Outlet } from 'react-router-dom'
import NavBar from './navegation/NavBar'

//Blueprint
const InsideApp = () => {
  return(
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default InsideApp
