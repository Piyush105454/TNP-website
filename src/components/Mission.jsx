const Mission = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        
        {/* Vision Box */}
        <div className="flex-1 bg-white rounded-lg p-6 md:p-8 shadow-md flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-base md:text-lg text-gray-700 leading-7 flex-1">
            To be a premier Training and Placement Cell that bridges the gap between academia and industry,
            fostering excellence in career development and ensuring optimal placement opportunities for all students.
            We strive to build strong industry connections and prepare our students to be future-ready professionals.
          </p>
        </div>

        {/* Mission Box */}
        <div className="flex-1 bg-white rounded-lg p-6 md:p-8 shadow-md flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 leading-7 space-y-2 flex-1">
            <li>To provide comprehensive training programs that enhance students' technical and soft skills</li>
            <li>To facilitate quality placements with leading organizations across various sectors</li>
            <li>To maintain strong industry relationships and create networking opportunities</li>
            <li>To guide students in making informed career choices and professional development</li>
            <li>To organize career development workshops, seminars, and industry interactions</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Mission;
