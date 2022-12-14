import React, { ReactNode } from "react";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import Head from "next/head";
import Navbar from "../common/navbar";

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="pt-[107px] flex flex-col min-h-screen">
      <Head>
        <title>AF Label Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-[54px] md:px-[200px]">
        <Navbar />
        {children}
      </main>
      <footer className="mt-auto h-[100px] w-full bg-dark-blue py-10 flex flex-col items-center justify-center">
        <h3 className="text-pink-600">AF Label</h3>
        <div className="mt-3 flex text-lg flex-row gap-3 text-white">
          <IoLogoInstagram />
          <IoMailOutline />
          <IoLogoWhatsapp />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
