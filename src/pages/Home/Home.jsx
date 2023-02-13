import React, { useEffect, useState } from "react";
import "./Home.scss";

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaTelegramPlane } from "react-icons/fa";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // get all post

  useEffect(() => {
    axios
      .get("http://localhost:5050/posts?_sort=id&_order=desc")
      .then((res) => {
        setPosts(res.data);
      });
  }, [setPosts]);

  // delete data

  const handelPostDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5050/posts/${id}`).then((res) => {
          setPosts(posts.filter((data) => data.id !== id));
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Header setPosts={setPosts} />
      <div className="body_content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="story_box">
                <div className="story_items ">
                  <p> RABBANI</p>
                </div>
                <div className="story_items ">
                  <p>
                    <span>Jibon</span> &nbsp; <span>Roy</span>
                  </p>
                </div>
                <div className="story_items ">
                  <p>
                    <span>Sabbir</span> &nbsp; <span>Vai</span>
                  </p>
                </div>
                <div className="story_items ">
                  <p>Raza Vai</p>
                </div>
                <div className="story_items ">
                  <p>Ovi Vai</p>
                </div>
                <div className="story_items ">
                  <p>
                    <span>Sohag</span> &nbsp; <span>Vai</span>
                  </p>
                </div>
                <div className="story_items ">
                  <p>
                    <span>Rubel</span> &nbsp; <span>Vai</span>
                  </p>
                </div>
              </div>

              {posts.map((item, index) => (
                <div className="timeLine my-5" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <div className="post">
                        <div className="post_aught">
                          <div className="user_info">
                            <a href="#">
                              <img
                                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                                alt=""
                              />
                            </a>
                            <div className="user_details">
                              <span>{item.aName}</span>
                            </div>
                          </div>
                          <div className="dropdown my-3">
                            <button className="dropbtn">
                              <BsThreeDots />
                            </button>
                            <div className="dropdown-content">
                              <Link to="#">Edit</Link>
                              <Link onClick={() => handelPostDelete(item.id)}>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="post_content">
                          <p>{item.pContent}</p>
                        </div>
                        <img src={item.pPhoto} alt="" />
                        <div className="post_footer my-3">
                          <div className="post_icon">
                            <ul>
                              <li>
                                <a href="#">
                                  <AiOutlineHeart />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaRegComment />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaTelegramPlane />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="post_middle">
                            <BsThreeDots />
                          </div>
                          <div className="post_last">
                            <a href="#">
                              <BsBookmark />
                            </a>
                          </div>
                        </div>
                        <div className="likes">
                          <h1>1,725 likes</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-3">
              <div className="right_content">
                <div className="user_text">
                  <a href="#">
                    <img
                      src="https://cdn.motor1.com/images/mgl/13jgw/s1/rolls-royce-black-badge-wraith-by-spofec.jpg"
                      alt=""
                    />
                  </a>
                  <div className="user_name">
                    <span className="subName">programmerrabbani</span> <br />
                    <span className="name2">G M GOLAM RABBANI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
