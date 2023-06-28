import React from "react";
import "./feed.css";
import { FaRegComments } from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Feed() {
  return (
    <div>
      <div className="feed">
        <div className="profile">
          <div className="head">
            <div className="profilehead">
              <div className="headimg">
                <img
                  src="https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="headname">
                <span>AbhishekRanjan8051</span>
                <span>Original Audio</span>
              </div>
            </div>
            <div className="righthead">
              <BsThreeDots />
            </div>
          </div>
          <div className="fullimghead">
            <img
              src="https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="profilefooter">
            <div className="profilefooterright">
              <div
                style={
                  {
                    // margin: "auto",
                    // display: "block",
                    // width: "fit-content",
                  }
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="checkedH"
                    />
                  }
                  label=""
                />
              </div>
              <div style={{ marginTop: "5px", cursor: "pointer" }}>
                <FaRegComments size={25} color="grey" />
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginLeft: "15px",
                  cursor: "pointer",
                }}
              >
                <AiOutlineShareAlt size={25} color="grey" />
              </div>
            </div>
            <div>
              <div
                style={{
                  // marginTop: "5px",
                  // marginLeft: "15px",
                  cursor: "pointer",
                }}
              >
                <BsBookmark size={25} color="grey" />
              </div>
            </div>
          </div>
          <div className="footercontent">
            <div className="likecount">
              <span>
                <b>1K Likes</b>{" "}
              </span>
            </div>
            <br />

            <div className="footerdesc">
              <span>
                {" "}
                <b> Profile Name</b>
              </span>
              <span>Post Description</span>
            </div>
            <br />
            <div className="footerviewcomments">
              <span> View 2 Comments</span>
            </div>
            <div className="commentswritefooter">
              <InputGroup className="mb-3">
                <Form.Control
                  className="commentlabel"
                  placeholder="Add Comment..."
                  aria-label="Add Comment..."
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Feed;
