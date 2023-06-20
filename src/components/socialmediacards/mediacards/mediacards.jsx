import React from "react";
import "./mediacards.css";
import userimage from "../../../assets/images/userimage.jpg";
import tick from "../../../assets/icons/tick.png";
import follow from "../../../assets/icons/follow.png";
const Profilecards = () => {
  const [activeButton, setActiveButton] = React.useState(false);
  const Profilelist = [
    {
      profileimage: userimage,
      icons: tick,
      Name: "William",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      request: "Follow",
      unrequest: "Unfollow",
    },
    {
      profileimage: userimage,
      icons: tick,
      Name: "Jordan",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      request: "Follow",
      unrequest: "Unfollow",
    },
    {
      profileimage: userimage,
      icons: tick,
      Name: "Harry",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      request: "Follow",
      unrequest: "Unfollow",
    },
    {
      profileimage: userimage,
      icons: tick,
      Name: "Picasso",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      request: "Follow",
      unrequest: "Unfollow",
    },
    {
      profileimage: userimage,
      icons: tick,
      Name: "Vermeer",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      request: "Follow",
      unrequest: "Unfollow",
    },
    {
      profileimage: userimage,
      icons: tick,
      Name: "Leonardo",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      request: "Follow",
      unrequest: "Unfollow",
    },
  ];
  const Renderprofile = Profilelist.map((profiletype) => {
    return (
      <div className="mediaprofile_main">
        <div className="mediauser"></div>
        <div className="mediaprofileinfo">
          <div className="medianame">
            <img src={profiletype.icons} alt="tick" />
            <h2>{profiletype.Name}</h2>
          </div>

          <p id="bio">{profiletype.bio}</p>
          <p>{profiletype.description}</p>
          <p id="followers">
            <b>{profiletype.followers}</b>
          </p>

          <div className="chat">
            <h5>{profiletype.posts}</h5>
            <button id="msg">{profiletype.chats}</button>
          </div>
          {!activeButton ? (
            <button id="followbtn" onClick={() => setActiveButton(true)}>
              {profiletype.request}
            </button>
          ) : (
            <button id="followbtn" onClick={() => setActiveButton(false)}>
              {profiletype.unrequest}
            </button>
          )}
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="mediacards_main">
        <div className="mediacardsheading">
          <img src={follow} alt="follow" />
          <h1>Popular people on social network</h1>
        </div>
        <div className="mediacards">{Renderprofile}</div>
      </div>
    </React.Fragment>
  );
};
export default Profilecards;
