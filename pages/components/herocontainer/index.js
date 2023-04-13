import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Caption from "../../../components/Caption/Caption";
import HeroContainer from "../../../components/HeroContainer/HeroContainer";
import { useState } from "react";

export default function heroContainer() {
  const [image, setImage] = useState({
    type: "image",
    file: "https://via.placeholder.com/150",
  });

  const [video, setVideo] = useState({
    type: "video",
    file: "https://player.vimeo.com/external/617738422.sd.mp4?s=6a95bb7adeca1b00595dcf03857803e894d00cd5&profile_id=165&oauth2_token_id=57447761",
  });

  let bootstrap = () => {};
  return (
    <div>
      <HeroContainer file={image}> 
      <div className="bg-[red] w-[100%] hmin-h-[200px]">test1</div>
      </HeroContainer>

      <HeroContainer file={video}> 
      <div className=" w-[100%] min-h-[200px]">test2</div>
      </HeroContainer>
    </div>
  );
}
