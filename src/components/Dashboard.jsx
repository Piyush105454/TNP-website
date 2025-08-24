import { Bell } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/bgImages/tnp_logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            {["Dashboard", "Preparation", "Placements", "Certificates"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative pb-1 hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button className="relative text-gray-600 hover:text-black">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 h-2 w-2 rounded-full"></span>
            </button>
            <img
              src="/bgImages/boy.png"
              alt="User"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full px-6 md:px-10 py-6">
        {/* Welcome Card */}
        <div className="bg-white rounded-lg p-6 flex justify-between items-center mb-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold">Welcome back, Sarah!</h2>
            <p className="text-gray-500 text-sm">
              Track your academic progress and prepare for placements
            </p>
          </div>
          <div className="text-right">
            <p className="text-red-500 text-2xl font-bold">8.9</p>
            <p className="text-gray-600 text-sm">CGPA</p>
            <p className="text-red-500 text-2xl font-bold">12</p>
            <p className="text-gray-600 text-sm">Certificates</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {[
            { title: "Profile", desc: "85% Complete" },
            { title: "Practice", desc: "3 Sessions Today" },
            { title: "Placements", desc: "5 New Opportunities" },
            { title: "Performance", desc: "Top 10%" },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold">{card.title}</p>
              <p className="text-gray-500 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent + Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg p-6 shadow-sm lg:col-span-2">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">Completed Python Assessment</span> <br />
                  Score: 92/100
                </span>
                <span className="text-gray-500">2h ago</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">Earned AWS Certification</span> <br />
                  Cloud Practitioner
                </span>
                <span className="text-gray-500">1d ago</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">Applied for Google Internship</span> <br />
                  Software Engineer Position
                </span>
                <span className="text-gray-500">2d ago</span>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-4">
              <button className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                Build Resume
              </button>
              <button className="py-2 rounded-md hover:bg-gray-50">
                Verify Certificate
              </button>
              <button className="py-2 rounded-md hover:bg-gray-50">
                Apply for Scholarship
              </button>
              <button className="py-2 rounded-md hover:bg-gray-50">
                Social Media
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-6 py-6 shadow-sm">
        <div className="max-w-[1440px] max-h-[180px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
          <div>
            <img src="/bgImages/tnp_logo.png" alt="Logo" className="h-8 mb-2" />
            <p>
              Empowering students to achieve their career goals through
              comprehensive preparation and guidance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-6">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-6">
              <li>Blog</li>
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect With Us</h4>
            <ul className="space-y-6">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-9">
          © 2024 Student Dashboard. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;