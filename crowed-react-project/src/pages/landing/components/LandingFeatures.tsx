// pages/landing.tsx
import { HelpCircle, Clock, Shield, Search } from 'lucide-react';
import {motion} from 'framer-motion'
const LandingFeatures = () => {
  return (
    <div className="mt-28 px-4 sm:px-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-10 ">
          <div className="">
            <h2 className="md:text-4xl text-3xl text-black font-semibold mb-6">
              Empowering Workforce Insights with AI
            </h2>
            <p className="text-black">
              Unlock accurate and efficient head-counting and attendance solutions using advanced AI. 
              Transform workforce data into actionable insights to streamline operations, enhance 
              productivity, and improve decision-making.
            </p>
            <button className="bg-main hover:bg-[#222] text-white flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8 ">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] fill-current ml-2" viewBox="0 0 492.004 492.004">
                <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" />
              </svg>
            </button>
          </div>

          <div  className="grid sm:grid-cols-2 gap-8">
            {/* Real-Time Tracking Feature */}
            <motion.div whileHover={{scale: 1.05}} className="text-center  bg-white shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6 ">
              <Clock className="w-12 h-12 text-blue-600 inline-block bg-blue-100 p-3 rounded-full" />
              <p className="font-semibold text-lg mt-4">Real-Time Tracking</p>
            </motion.div>

            {/* AI-Powered Insights Feature */}
            <motion.div whileHover={{scale: 1.05}} className="text-center bg-white shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6  delay-200">
              <Search className="w-12 h-12 text-green-600 inline-block bg-green-100 p-3 rounded-full" />
              <p className="font-semibold text-lg mt-4">AI-Powered Insights</p>
            </motion.div>

            {/* Secure Data Management Feature */}
            <motion.div whileHover={{scale: 1.05}} className="text-center bg-white shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6  delay-400">
              <Shield className="w-12 h-12 text-red-600 inline-block bg-red-100 p-3 rounded-full" />
              <p className="font-semibold text-lg mt-4">Secure Data Management</p>
            </motion.div>

            {/* 24/7 Support Feature */}
            <motion.div whileHover={{scale: 1.05}} className="text-center bg-white shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6  delay-600">
              <HelpCircle className="w-12 h-12 text-purple-600 inline-block bg-purple-100 p-3 rounded-full" />
              <p className="font-semibold text-lg mt-4">24/7 Support</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFeatures;
