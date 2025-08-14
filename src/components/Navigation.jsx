const Navigation = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Vision Box */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Our Vision</h2>
          <p className="text-base text-[#4b4f56] leading-relaxed">
            To be a premier Training and Placement Cell that bridges the gap between academia and industry,
            fostering excellence in career development and ensuring optimal placement opportunities for all students.
            We strive to build strong industry connections and prepare our students to be future-ready professionals.
          </p>
        </div>

        {/* Mission Box */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Our Mission</h2>
          <ul className="space-y-4 list-disc list-inside text-[#4b4f56]">
            <li>To provide comprehensive training programs that enhance students' technical and soft skills</li>
            <li>To facilitate quality placements with leading organizations across various sectors</li>
            <li>To maintain strong industry relationships and create networking opportunities</li>
            <li>To guide students in making informed career choices and professional development</li>
            <li>To organize career development workshops, seminars, and industry interactions</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Navigation;
