import React, { Component } from 'react'
import Post from "./Post"
import {Link} from 'react-router-dom'

class Postbody extends Component {
  constructor(props){
    super(props);

    this.addPost = this.addPost.bind(this);
    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);

    this.state = {
      headPost: "",
      posts: [],
      newPostBody: '',
    }
  }



  addPost() {
    const newState = Object.assign({}, this.state)
    newState.posts.push(this.state.newPostBody);
    newState.newPostBody = '';
    this.setState(newState);
  }

  handlePostEditorInputChange(ev){
    this.setState({
      newPostBody: ev.target.value
    })
  }

  render(){
    return(
      <div>
      <Post postBody={headPost}/>
      {this.state.posts.map((postBody, idx) =>{
        return(
          <Post key={idx} postBody ={postBody}/>
        )
      })}

      <div className = "panel panel-default">
        <div className = "panel-body">
          <textarea className = "form-control" onChange={this.handlePostEditorInputChange}/>
          <button className = "btn btn-success" onClick = {this.addPost}>Comment</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Postbody;
