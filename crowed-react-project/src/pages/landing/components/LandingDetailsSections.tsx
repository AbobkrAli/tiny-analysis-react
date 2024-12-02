import { ArrowRight } from 'lucide-react'; // Import Lucide ArrowRight icon
import { Button } from '@mui/material';

const LandingDetailsSections = () => {
  return (
    <>
      <div className="px-4 sm:px-10 mt-28 bg-white py-[100px]">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 justify-center items-center gap-10">
          <div>
            <h2 className="md:text-4xl text-3xl font-semibold mb-6">100% Secure your data</h2>
            <p>
              Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat
              officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in. Consectetur velit ullamco veniam minim
              aute sit.
            </p>
            <Button
              className="bg-black hover:bg-[#222] py-[20px] text-white flex items-center transition-all font-semibold rounded-md px-5 mt-8"
            >
              Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="w-full h-full">
            <img
              src="landing/landing-2.svg"
              alt="feature"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-10 mt-28  mb-[50px]">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-10">

            <div>
              <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                Fresh Ideas for your business design
              </h2>
              <p>
                Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit
                occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in. Anim excepteur et ex
                consectetur velit ullamco veniam minim aute sit.
              </p>


            </div>
            <div className="w-full h-full">
              <img
                src="/landing/landing-1.svg"
                alt="Premium Benefits"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default LandingDetailsSections;
