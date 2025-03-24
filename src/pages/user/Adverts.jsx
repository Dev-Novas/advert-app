import React, { useEffect } from "react";
import { apiGetAllAdverts } from "../../services/adverts";

const Adverts = () => {
  con
  const fetchAds = async () =>{
    try {
      const res = await apiGetAllAdverts ();
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };
useEffect(() => {
  fetchAds();
}, [])
  return <div>Adverts</div>;
};

export default Adverts;
