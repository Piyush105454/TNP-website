import Navbar from '../components/Navbar';
import Mission from '../components/Mission';
import AboutUs from '../components/AboutUs';
import SuccessStories from '../components/SuccessStories';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import 'leaflet/dist/leaflet.css';
import '../styles/leaflet-fixes.css';
import { MapContainer, TileLayer } from 'react-leaflet';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
      className="relative w-full h-[90vh] bg-[url('/bgImages/image@1x.png')] bg-center bg-cover flex items-center justify-start overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 px-6 sm:pl-14 sm:pr-0 flex flex-col items-start justify-center h-full w-full max-w-full sm:max-w-[700px]">
        
        {/* Title */}
        <h1 className="font-roboto text-[2.1rem] font-black text-[#111] mb-[1.2rem] leading-[1.08] tracking-[-1.5px]">
          Shape Your Future with <br />
          Training and Placement RGPV
        </h1>

        {/* Subtitle */}
        <p className="font-roboto text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] text-[#222] mb-[2.2rem] font-normal max-w-[95%]">
          Empowering students through excellence in training and placement opportunities.
        </p>

        {/* Button */}
        <button className="font-roboto bg-white text-red-600 border-2 border-red-600 rounded px-[2.2rem] py-[0.7rem] text-[1.1rem] font-medium shadow-sm hover:bg-red-600 hover:text-white transition-colors duration-200">
          Get Started
        </button>
      </div>
    </section>

      {/* Our Vision & Mission Section */}
      <Mission />

      {/* About Us Section */}
      <AboutUs />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Our Recruiters Section */}
      <section className="relative py-16 px-4 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-gradient-to-r from-red-600 to-red-800 after:rounded">
            Our Recruiters
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto border border-gray-100 hover:-translate-y-0.5 hover:shadow-xl transition">
            <div className="text-purple-600 text-xl font-bold drop-shadow-sm">LO GO</div>
            <p className="text-gray-500 mt-2 italic">Recruiter logos will be displayed here</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="relative py-16 px-4 bg-gray-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="max-w-xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:-translate-y-0.5 hover:shadow-xl transition">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-12 after:h-[3px] after:bg-gradient-to-r from-red-600 to-red-800 after:rounded">
                Training & Placement Cell
              </h2>

              {/* Location */}
              <div className="flex items-start gap-4 mb-6 hover:translate-x-1 transition">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 shadow-md hover:scale-110 hover:shadow-lg transition">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-white">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  RGPV Campus, Airport Bypass Road, Gandhi Nagar, Bhopal, Madhya Pradesh 462033
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6 hover:translate-x-1 transition">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 shadow-md hover:scale-110 hover:shadow-lg transition">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-white">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-gray-700">+91 755 2678 800</p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6 hover:translate-x-1 transition">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 shadow-md hover:scale-110 hover:shadow-lg transition">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-white">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-gray-700">placement@rgpv.ac.in</p>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="relative w-full h-64 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                  <MapContainer
                    center={[23.31, 77.36]}
                    zoom={15}
                    style={{ height: '100%', width: '100%' }}
                    className="z-0"
                    aria-label="Map showing RGPV Campus location"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; OpenStreetMap contributors"
                    />
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
