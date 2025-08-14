import { useEffect, useRef } from "react";

const SuccessStories = () => {
  const scrollRef = useRef(null); // ✅ no <HTMLDivElement>

  useEffect(() => {
    const fixButtonAccessibility = () => {
      const btn = document.getElementById("open-side-panel");
      if (btn) {
        // Add proper accessibility attributes
        btn.setAttribute("aria-label", "Open side panel");
        btn.setAttribute("title", "Open side panel");
        
        // Add visible text for screen readers
        if (!btn.textContent || btn.textContent.trim() === "") {
          btn.textContent = "Open side panel";
        }
        
        // Ensure button is properly focusable
        if (btn.style.opacity === "0" || btn.style.visibility === "hidden") {
          btn.setAttribute("aria-hidden", "true");
          btn.setAttribute("tabindex", "-1");
        }
      }
    };

    // Run immediately
    fixButtonAccessibility();

    // Use MutationObserver to watch for dynamically added buttons
    const observer = new MutationObserver(() => {
      fixButtonAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const successStories = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial:
        "RGPV's placement cell played a crucial role in helping me achieve my dream job.",
    },
    {
      id: 2,
      name: "Priya Mehta",
      position: "Data Scientist at Microsoft",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial:
        "The mentorship and training here helped me sharpen my skills and land my dream role.",
    },
    {
      id: 3,
      name: "Amit Verma",
      position: "Product Manager at Amazon",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial:
        "RGPV's ecosystem provided me with the right exposure and opportunities.",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="success-stories-heading"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2
            id="success-stories-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni who have made it big with the help of RGPV's
            placement cell.
          </p>
        </header>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 md:overflow-x-visible scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollPadding: "1rem" }}
        >
          {successStories.map((story) => (
            <article
              key={story.id}
              className="flex-none w-[85%] sm:w-[320px] md:w-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 text-center group snap-start"
              aria-label={`Testimonial from ${story.name}`}
            >
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-200 transition-colors duration-300">
                  <img
                    src={story.image}
                    alt={`Portrait of ${story.name}, ${story.position}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform">
                  <div
                    className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"
                    aria-label="Verified alumni"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      role="img"
                    >
                      <title>Verified</title>
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {story.name}
              </h3>

              {/* Position */}
              <p className="text-red-600 font-medium mb-6 text-base">
                {story.position}
              </p>

              {/* Testimonial */}
              <blockquote className="text-gray-600 italic leading-relaxed text-base">
                "{story.testimonial}"
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
