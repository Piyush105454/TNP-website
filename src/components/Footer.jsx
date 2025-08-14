import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#161b29] text-white">
      <div className="flex flex-col md:flex-row md:h-auto">
        {/* Logo & Description */}
        <div className="w-full md:w-1/4 p-4">
          <div className="mb-4 max-w-[100px]">
            <img
              src="https://whatthelogo.com/storage/logos/rajiv-gandhi-proudyogiki-vishwavidyalaya-95752.png"
              alt="RGPV Logo"
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm md:text-base">
            Empowering students for a better tomorrow through quality education
            and placement opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 p-4">
          <h1 className="text-lg md:text-xl font-bold">Quick Links</h1>
          <ul className="mt-4 space-y-2 text-[15px] md:text-[17px]">
            {["About Us", "Success Stories", "Recruiters", "Contact"].map(
              (link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-red-500 transition">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-1/4 p-4">
          <h1 className="text-lg md:text-xl font-bold">Connect with us</h1>
          <div className="text-lg md:text-xl mt-4 space-x-4 flex">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook size={24} strokeWidth={2} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} strokeWidth={2} />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <Twitter size={24} strokeWidth={2} />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={24} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/4 p-4">
          <h1 className="text-lg md:text-xl font-bold">Newsletter</h1>
          <form className="mt-4">
            <input
              type="email"
              name="E-mail"
              placeholder="Enter your E-mail"
              className="bg-[#36454F] border border-white rounded-[5px] w-full h-10 px-2 text-white placeholder-gray-300"
            />
            <button
              type="submit"
              className="font-medium bg-red-800 w-full h-10 rounded text-white mt-2 hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-500 mt-4" />
      <p className="w-full text-center p-4 text-xs text-gray-300">
        © 2025 RGPV Training and Placement Cell. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
