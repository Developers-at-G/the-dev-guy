import Image from "next/image";
import React from "react";
const Career = () => {
    return (
        <div className="bg-gray-800 w-full- h-full">
          <div className="py-10">
            <p className="text-black text-center font-bold text-3xl text-white">Work Experience</p>
          </div>
          <div className='py-28 flex justify-center items-center'>
            <div className="grid grid-cols-3  gap-40">
                <div className="grid grid-rows-3 gap-20">
                    <div className="flex items-center justify-center text-white">JAN 2023 - PRESENT</div>
                    <div className="flex items-center justify-center text-white">DEC 2023 - NOV 2022</div>
                    <div className="flex items-center justify-center text-white">JAN 2020 - JUN 2020</div>
                </div>
                <div className="grid grid-rows-3 gap-20">
                    <Image src="/Images/smal.png" alt="smal" width={80} height={80} />
                    <Image src="/Images/Obertys.png" alt="obertys" width={100} height={100} />
                    <Image src="/Images/future-stories.png" alt="future-stories" width={100} height={100} />
                </div>
                {/* instead of having this repeating, create a text component with this style */}
                <div className="grid grid-rows-3 gap-20">
                    <div className="w-full h-full bg-white rounded-2xl py-4 px-6 flex flex-col items-center justify-center">
                        <span className="text-black text-xl">Software Engineer</span>
                        <span className="text-black text-base" >Smal Gmbh</span>
                    </div>
                    <div className="w-full h-full bg-white rounded-2xl py-4 px-6 flex flex-col items-center justify-center">
                    <span className="text-black text-xl">Frontend Developer</span>
                    <span className="text-black text-base">Future Stories</span>
                    </div>
                    <div className="w-full h-full bg-white rounded-2xl py-4 px-6 flex flex-col items-center justify-center">
                        <span className="text-black text-xl">Fullstack Developer</span>
                        <span className="text-black text-base">Obertys</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
};

export default Career;
