import React, { useEffect, useState } from "react";
import { axiosSP, getConfig } from "../utils/configAxios";

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axiosSP("/browse/new-releases", getConfig())
      .then((res) => setAlbums(res.data.albums.items))
      .catch((err) => console.log(err));
  }, []);

  return <div>d</div>;
};

export default Home;
