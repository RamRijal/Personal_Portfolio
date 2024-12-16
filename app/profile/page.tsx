import ProfileDetails from "@/components/ProfileDetails";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="hidden xl:block w-full absolute top-[850px] bg-[#7343D9] h-[500px]">
    </div>
      <div className="xl:absolute z-50 lg:top-[700px] lg:left-2 xl:top-[650px] xl:left-24">

        <ProfileDetails />
      </div>
    </>
  );
};

export default Profile;
