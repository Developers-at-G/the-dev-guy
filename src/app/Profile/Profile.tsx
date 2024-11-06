import Image from "next/image";
import React from "react";
const Profile = () => {
  return (
    <div className="flex flex-row items-center justify-center p-28 gap-48 bg-zinc-900 w-full- h-full">
      <div className="w-full h-full">
        <Image src="/Images/profile.png" alt="profile" width={400} height={400} />
      </div>
      <div className="flex flex-col w-full h-full">
          <p className="text-3xl font-bold mb-10">HELLO, I’M ABDALAH AMADOU GUEYE</p>
          <p className="text-base">
            My name is Abdalah Amadou Gueye I am from Senegal, I am a Master in
            Applied Computer Science, specialized in UI / UX Design and
            Usability Engineering. I have been working as a Software Engineer
            for many years using, React JS and Next Js, with a focus on modern
            UI/UX design principles.
          </p>
      </div>
    </div>
  );
};

export default Profile;
