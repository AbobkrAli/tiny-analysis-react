
const LandingFooter = () => {
  const currentYear = new Date()
  return (
    <footer className="bg-gray-900 mt-[100px] text-gray-300 py-6 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose">©Crowed analysis. All rights reserved {currentYear.getFullYear()}.</p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li><a href="#" className="text-[15px] hover:text-white">Crowed Analysis</a></li>
          <li><a href="#" className="text-[15px] hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-[15px] hover:text-white">About</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default LandingFooter