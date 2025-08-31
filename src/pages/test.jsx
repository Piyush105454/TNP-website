import React, { useState } from 'react';
import { MapPin, Clock, DollarSign } from "lucide-react";

const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "Software Development Intern",
    location: "Remote",
    duration: "6 Months",
    salary: "$2000–3000/month",
    tag: "New"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "UI/UX Intern",
    location: "Hybrid",
    duration: "3 Months",
    salary: "$1500–2500/month",
    tag: "Hot"
  },
  {
    id: 3,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "UI/UX Designer",
    location: "On-site",
    duration: "12 Months",
    salary: "$3000–4000/month",
    tag: "New"
  }
];

const Test = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
  <div className="bg-[#F9FAFB] relative flex flex-col min-h-screen w-full">
      {/* Header */}
      <header className="bg-white shadow-md w-full">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 w-full">
          <nav className="flex items-center justify-between h-16 relative w-full">
            <div className="flex items-center">
              <img src="/bgImages/tnp_logo.png" alt="Logo" className="h-8 w-auto" />
              {/* Mobile menu button */}
              <button
                className="md:hidden ml-4 focus:outline-none"
                onClick={() => setNavOpen(!navOpen)}
              >
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Desktop nav */}
              <div className="hidden md:flex ml-2 sm:ml-6 md:ml-10 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                {["Dashboard", "Performance", "Leaderboard", "Certificate", "Practice"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {item}
                    </a>
                  )
                )}
                <a
                  href="#"
                  className="text-black font-semibold border-b-2 border-[#9A0F0F]"
                >
                  Jobs
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div className="w-8 h-8 bg-[#9A0F0F] rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
            </div>

            {/* Mobile nav */}
            {navOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 flex flex-col md:hidden">
                {["Dashboard", "Performance", "Leaderboard", "Certificate", "Practice"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="px-4 py-2 text-gray-500 hover:text-gray-700 border-b"
                    >
                      {item}
                    </a>
                  )
                )}
                <a
                  href="#"
                  className="px-4 py-2 text-black font-semibold border-b-2 border-red-700"
                >
                  Jobs
                </a>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
  <main className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 flex-1 w-full">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-['Roboto'] text-center sm:text-left">
            Find Your Next Opportunity
          </h1>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] font-normal tracking-[0px] font-['Roboto'] text-center sm:text-left">
            Explore internships and placement opportunities from top companies
          </p>
        </div>

        {/* Search Filters */}
  <div className="p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg mb-4 sm:mb-6 md:mb-8 w-full">
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 md:flex-row md:items-center md:space-x-4 w-full">
      <div className="w-full md:flex-1">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search opportunities..."
            className="text-[13px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.02em] font-medium font-['Roboto'] w-full h-[34px] sm:h-[38px] md:h-[42px] pl-10 pr-2 sm:pl-12 sm:pr-4 py-2 sm:py-2 md:py-3 rounded-[8px] border border-[#9CA3AF] focus:outline-none focus:ring-2"
          />
        </div>
      </div>
      <div className="w-full md:w-[160px] lg:w-[200px] xl:w-[311px]">
        <select className="w-full h-[34px] sm:h-[38px] md:h-[42px] px-2 sm:px-3 md:px-4 py-2 border border-[#9CA3AF] rounded-lg focus:outline-none focus:ring-2">
          <option className='font-["Roboto"] text-[14px] leading-[20px] font-normal tracking-[0px]'>All Job Types</option>
        </select>
      </div>
      <div className="w-full md:w-[160px] lg:w-[200px] xl:w-[311px]">
        <select className="w-full h-[34px] sm:h-[38px] md:h-[42px] px-2 sm:px-3 md:px-4 py-2 border border-[#9CA3AF] rounded-lg focus:outline-none focus:ring-2">
          <option className='font-["Roboto"] text-[14px] leading-[20px] font-normal tracking-[0px]'>All Locations</option>
        </select>
      </div>
    </div>
  </div>

        {/* Job Listings */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
      {jobs.map((job) => (
  <div key={job.id} className="flex flex-col items-center w-full">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full w-full">
            <div className="p-2 sm:p-4 md:p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                {job.logo ? (
                  <img src={job.logo} alt={job.company} className="h-8" />
                ) : null}
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  job.tag === "New" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {job.tag}
                </span>
              </div>
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] tracking-[0px] font-bold font-['Roboto']">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-1 sm:mb-2 md:mb-4">{job.company}</p>

              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 text-xs sm:text-sm text-black mb-1 sm:mb-2 md:mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-black" />
                  <span>{job.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-black" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between bg-[#F9FAFB] rounded-b-[8px] gap-1 sm:gap-2 w-full py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 mt-0" style={{maxWidth: '100%'}}>
            <span className="font-['Roboto'] font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[16px] sm:leading-[18px] md:leading-[20px] text-[#9A0F0F]">
              Deadline: Dec 15, 2023
            </span>
            <button className="font-['IBM Plex Sans'] font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-[16px] sm:leading-[18px] md:leading-[20px] tracking-[0px] px-2 sm:px-3 md:px-4 h-[28px] sm:h-[34px] md:h-[38px] rounded-[8px] bg-[#9A0F0F] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-[#ffffff] flex items-center justify-center w-auto min-w-[100px] sm:min-w-[120px] max-w-[180px] mt-1 sm:mt-2 md:mt-0">
              View Details
            </button>
          </div>
        </div>
      ))}

      
    </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-auto w-full">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 w-full flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4">
          <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm text-center sm:text-left w-full sm:w-auto">
            Need help? Contact TNP Coordinator:<span className="font-roboto font-normal text-[#9A0F0F]"> tnp@example.com</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-end gap-1 sm:gap-2 md:gap-3 w-full sm:w-auto">
            <button className="border border-gray-600 text-[#4B5563] px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg min-w-[90px] sm:min-w-[120px] max-w-[180px] text-[11px] sm:text-xs md:text-sm">
              Apply Now
            </button>
            <button className="bg-[#9A0F0F] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg min-w-[90px] sm:min-w-[120px] max-w-[180px] text-[11px] sm:text-xs md:text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Test;
