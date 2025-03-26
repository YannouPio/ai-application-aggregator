import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-white min-h-screen">
      <div className="w-64 hidden md:block fixed h-screen">
        <SideNav />
      </div>
      <div className="flex-1 md:ml-64">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default layout;
