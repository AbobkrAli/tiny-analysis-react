import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const LandingHeader = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 px-8 py-4 flex justify-between items-center bg-white shadow-md backdrop-blur-lg">
      <Link to="/" className="text-2xl font-bold">
        Futuristic App
      </Link>
      <div>
      <Link to="/dashboard">
        <Button variant="contained" className="px-6 py-3">
          Dashboard
        </Button>
      </Link>
      <Link to="/login" className="mx-[20px]">
        <Button variant="contained" className="px-6 py-3">
          Login
        </Button>
      </Link>
      </div>
    </nav>
  )
}

export default LandingHeader