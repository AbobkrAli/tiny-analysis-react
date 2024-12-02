import { Outlet } from "react-router-dom"
import LandingHeader from "../components/headers/LandingHeader"
import LandingFooter from "../components/footers/LandingFooter"

const LandingLayout = () => {
  return (
    <div>
      <LandingHeader />
      <Outlet />
      <LandingFooter />
    </div>
  )
}

export default LandingLayout