import React from "react"
import {Link} from 'react-router-dom'

const Post = (props) => (
  <div className = "panel panel-default">
    <div className = "panel-body">
      {props.postBody}
    </div>
  </div>
);

export default Post;
