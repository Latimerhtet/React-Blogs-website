import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";
const PrePage = ({ showPosts, setShowposts }) => {
  const showHandler = () => {
    setShowposts(true);
  };
  return (
    <section className="prepage-main">
      <div className="prepage-description">
        <div className="prepage-sub">
          <h3>
            Share your experiences with people <br /> around the world!
            <FaRegNewspaper />
          </h3>
          <div className="btn-groups">
            <button onClick={showHandler}>Explore Blogs</button>

            <Link to={"/auth?mode=signup"}>
              <button>SignUp</button>
            </Link>
          </div>
        </div>
        <img
          className="prepage-img"
          src={
            "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg"
          }
          alt="description-img"
        />
      </div>
    </section>
  );
};

export default PrePage;
