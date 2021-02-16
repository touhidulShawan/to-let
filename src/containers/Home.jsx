import { useEffect, useState } from "react";
import OCR from "./OCR";
import NavBar from "../components/Navbar";
import firebase from "firebase/app";
import PostCard from "../components/PostCard";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <main>
      <NavBar />
      <div>
        <OCR />
      </div>
      <div>
        <Feed />
      </div>
    </main>
  );
};
export default Home;
