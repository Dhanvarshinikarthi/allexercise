import React, { useState } from "react";
import search from "../../../assets/images/search.png";
import message from "../../../assets/images/message.jpg";
import addpost from "../../../assets/images/addpost.png";
import "./header.css";

import Addpostpage from "../addpost/addpost";
const Headermain = () => {
  const [addPostOpen, setAddpostOpen] = useState(false);
  return (
    <div className="socialheader_main">
      <h1>Social Network</h1>
      <div className="searchbar">
        <input type="search" placeholder="Search" />
        <button>
          <img src={search} alt="search" />
        </button>
      </div>
      <a href="#">Wall</a>
      <a href="#">friends</a>
      <a href="#" id="message">
        <img src={message} alt="message" />
      </a>
      <div className="addpost">
        <div className="createpost">
          <button onClick={() => setAddpostOpen(true)}>
            <img src={addpost} alt="addpost" />
          </button>
        </div>
        Create Posts
      </div>
      <button>Logout</button>
      <Addpostpage trigger={addPostOpen} setTrigger={setAddpostOpen} />
    </div>
  );
};
export default Headermain;
