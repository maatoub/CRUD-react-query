import React from "react";

const HeaderLayout = () => {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <HomeOutlined />
          Home
        </div>
      </div>
    </nav>
  );
};
export default HeaderLayout;
