import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Homepage from "./Components/Homepage"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
