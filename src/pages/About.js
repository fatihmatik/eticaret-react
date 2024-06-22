import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim
          eu dolor condimentum suscipit. Integer ac ex nec eros vestibulum
          convallis. Proin at massa vel ipsum volutpat accumsan. Phasellus
          dapibus orci non massa suscipit, nec interdum est viverra. Nam at
          lectus sed neque ultricies tristique non in metus.
        </p>
        <p className="text-gray-700">
          Fusce rutrum enim at eros maximus sollicitudin. Suspendisse cursus,
          orci nec venenatis ullamcorper, orci ligula sollicitudin sem, in
          convallis nisi augue non metus. Mauris ut volutpat leo. Donec lacinia,
          orci nec feugiat lobortis, risus lectus ullamcorper lorem, a efficitur
          lectus risus in metus.
        </p>
      </div>
    </div>
  );
};

export default About;
