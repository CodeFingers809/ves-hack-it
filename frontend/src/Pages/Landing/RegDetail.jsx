import React from "react";
import { MapPin, Zap, Users, User } from "lucide-react";

const RegistrationBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,136,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.05),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Title and Fees Section */}
          <div className="flex-1 space-y-4 flex flex-col items-center">
            {/* <div className="flex gap-2">
            <button onClick={()=>window.open("https://unstop.com/p/ves-hack-it-vivekanand-education-societys-institute-of-technology-vesit-mumbai-1336926","_blank")} className="px-6 sm:px-8 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Software
            </button>
            
            <button onClick={()=>window.open("https://forms.gle/XxqLRKGWRJbJo2Zs7","_blank")} className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Hardware
            </button>
          </div> */}
            {/* <button
              onClick={() =>
                window.open(
                  "https://unstop.com/p/ves-hack-it-vivekanand-education-societys-institute-of-technology-vesit-mumbai-1336926",
                  "_blank"
                )
              }
              className="px-6 py-2 bg-blue-300 hover:bg-blue-400 text-black font-semibold rounded-full text-xs uppercase shadow-md transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-opacity-50"
            >
              Apply on Unstop
            </button> */}
            <h2 className="text-orange-400/90 font-semibold tracking-wide text-xl uppercase mb-3">
              Registration Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-2">
              {/* Software Track */}
              <div className="flex items-center justify-center gap-2 group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-green-400 font-medium text-xl">
                    Software Track
                  </p>
                  <p className="text-slate-300 text-xs">Free Entry</p>
                </div>
              </div>

              {/* Hardware Track */}
              <div className="flex items-center justify-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-orange-400 font-medium text-xl">
                    Hardware Team
                  </p>
                  <p className="text-slate-300 text-xs">₹400 per team</p>
                </div>
              </div>

              {/* Individual Entry */}
              <div className="flex items-center justify-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-400 font-medium text-xl">
                    Individual (Hardware)
                  </p>
                  <p className="text-slate-300 text-xs">₹100 per person</p>
                </div>
              </div>
            </div>

            {/* Venue Section */}
            <div
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/NPvAH6Nxqpmk9JxLA",
                  "_blank"
                )
              }
              className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 cursor-pointer"
            >
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-slate-200">
                Vesit, Hashu Adwani Memorial Complex, Collector's Colony,
                Chembur, Mumbai, Maharashtra 400074
              </span>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>
    </div>
  );
};

export default RegistrationBanner;
