import React from 'react'
import abouticon from "../assets/images/about_page.png";
const About = () => {
  return (
    <div className="flex flex-col bg-gray-300 min-h-96 p-10">
      <div className="flex flex-col md:flex-row justify-between gap-9">
        <div className="rounded-full">
          <img
            src={abouticon}
            alt=""
            srcset=""
            className="object-cover w-7xl rounded-lg h-96"
          />
        </div>
        <div className="bg-white py-7 px-4 md:py-14 md:px-16  space-y-6 md:max-w-3xl md:h-96">
          <h1 className="text-slate-800 whitespace-normal text-8xl top-[200px] font-semibold absolute md:left-[280px]  md:top-[426px] tracking-wider ">
            <span className="text-white">About </span> <span>US </span>{" "}
          </h1>
          <p className="text-slate-700 md:leading-6 md:tracking-wider md:mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            natus sit consequatur recusandae quod commodi. Ipsum amet nemo, qui
            ex exercitationem perferendis officiis ducimus modi ad laudantium?
            Quod, laudantium voluptates?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sint, natus sit consequatur recusandae quod
            commodi. Ipsum amet nemo, qui ex exercitationem perferendis officiis
            ducimus modi ad laudantium? Quod, laudantium voluptates? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sint, natus sit
            consequatur recusandae quod commodi.
          </p>
        </div>
      </div>
      <div className="bg-white mt-5 p-6">
        <p className="text-slate-700 text-center italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, natus
          sit consequatur recusandae quod commodi. Ipsum amet nemo, qui ex
          exercitationem perferendis officiis ducimus modi ad laudantium? Quod,
          laudantium voluptates?
        </p>
      </div>
    </div>
  );
}

export default About