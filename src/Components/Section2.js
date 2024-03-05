import React from "react";
import Blogitem from "./Blogitem";
import Item from "./Item";
import Tecnology from "./Tecnology";

const Section2 = () => {
  const background = {
    backgroundImage:
      'linear-gradient( rgba(0, 0, 0, 0.6) , rgba(0, 0, 0, 0.8) ),url("https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2h8ZW58MHx8MHx8fDA%3D") ',

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat ",
  };
  return (
    <>
      <section className="mt-4 p-2" style={background}>
        <Tecnology />

        {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-5  ">
          <Blogitem img="https://images.unsplash.com/photo-1530508943348-b8f606ea2bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" />
          <Blogitem img="https://plus.unsplash.com/premium_photo-1687119905837-0900281ea2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8fDA%3D" />
          <Blogitem img="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D" />
          <Blogitem img="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDA%3D" />
        </div> */}
      </section>
    </>
  );
};

export default Section2;
