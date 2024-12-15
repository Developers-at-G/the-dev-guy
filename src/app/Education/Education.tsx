import Image from "next/image";
import React from "react";
const Education = () => {
    return (
        <div className="bg-white w-full- h-full">
          <div className="py-10">
            <p className="text-black text-center font-bold text-3xl">Education</p>
          </div>
          <div className='py-28 flex justify-center items-center gap-10'>
            <div className="relative w-max-content h-max-content bg-black p-8 flex flex-col rounded-xl justify-center items-center gap-5">
                <div className="transition-transform duration-700 ease-out hover:scale-110">
                <Image src="/Images/Master.png" alt="master-degree" width={400} height={300} />
                </div>
                <div className="text-white flex flex-col gap-2 items-center justify-center font-bold">
                <div>2021 - 2023</div>
                <div>Master in Applied Computer Science</div>
                <div className="text-white text-bold text-xl uppercase">SRH Heidelberg University</div>
                </div>
                
            </div>
            <div className="relative w-max-content h-max-content bg-black p-8 flex flex-col rounded-xl justify-center items-center gap-5">
                <div className="transition-transform duration-700 ease-out hover:scale-110">
                <Image src="/Images/Bachelor.png" alt="bachelor-degree" width={400} height={300} />
                </div>
                <div className="text-white flex flex-col gap-2 items-center justify-cente font-bold">
                <div className="text-bold">2016 - 2020</div>
                <div>Bachelor in Computer Engineering</div>
                <div className="text-white text-bold text-xl uppercase">Hasan Kalyoncu University</div>
                </div>
                
            </div>
          </div>
        </div>
      );
};

export default Education;
