import React from "react";
import "../styles/main.css";
import Cover from "../images/dyl2.jpeg";
import { FaSpotify, FaInstagram, FaFacebook } from "react-icons/fa";

const index = () => {
  return (
    <div className="bg flex">
      <section className="left text-center container">
        <div className="content">
          <h1>Wolf Pine</h1>
          <p className="mid">The debut album</p>
          <h2>Dyl McNeil</h2>
          <a
            href="https://open.spotify.com/album/666nYHHMWudqhRAxfLMoBK?si=ll6Y595ERmmmKjQWfjX20Q"
            className="btn"
            target="_blank"
          >
            Listen Now
          </a>
        </div>
        <div className="bottom">
          <div className="socialIcons">
            <a href="https://open.spotify.com/artist/1olajbyv4GRrbo3JQtvNxi?si=_LcD6tyWR36wyw7VZNJh9g">
              <FaSpotify size="30" />
            </a>
            <a href="https://www.instagram.com/dylmcneilmusic/">
              <FaInstagram size="30" className="mx-5" />
            </a>
            <a href="https://www.facebook.com/dylmcneilmusic/">
              <FaFacebook size="30" />
            </a>
          </div>
        </div>
      </section>
      <section className="right container">
        <img src={Cover} alt="dyl-mcneil-album-cover" className="albumCover" />
      </section>
    </div>
  );
};

export default index;
