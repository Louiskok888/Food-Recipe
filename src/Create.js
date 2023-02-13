// const Create = () => {
//     return (
//         <div className="create">
//             <h2>New Food</h2>
//         </div>
//     )
// }



import React, { useEffect, useState } from "react";
const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

export default function Create() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="icons" />
    </>
  );
}


