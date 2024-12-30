import Image from "next/image";
import React from "react";
const Profile = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center p-8 md:p-28 gap-8 md:gap-48 bg-gray-800 w-full- h-full ">
      <div className="w-full h-full flex justify-center">
        <Image src="/Images/Profile.png" alt="profile" width={400} height={400} 
        className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
        />
      </div>
      <div className="flex flex-col w-full h-full text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-white">HELLO, I’M ABDALAH AMADOU GUEYE</p>
          <p className="text-base md:text-base text-white">
            My name is Abdalah Amadou Gueye I am from Senegal, I am a Master in
            Applied Computer Science, specialized in UI / UX Design and
            Usability Engineering. I have been working as a Software Engineer
            for many years using, React JS and Next Js, with a focus on modern
            UI/UX design principles.
          </p>
      </div>
    </section>
  );
};

export default Profile;
