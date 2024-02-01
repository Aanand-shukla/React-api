import React, { useEffect } from "react";
// import axios from "axios";
// import ShowList from "../components/ShowList";

function HomeScreen() {
  //   const [shows, setShows] = useState([]);
  let Api = "https://api.tvmaze.com/search/shows?q=all";
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApiData(Api);
  });

  return (
    <div>
      <h1>TV Shows</h1>
      {/* <ShowList shows={shows} /> */}
    </div>
  );
}

export default HomeScreen;
