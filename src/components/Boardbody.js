import React, { Component } from 'react'
import Post from "./Post"
import Postbody from "./Postbody"

class Boardbody extends Component {
  constructor(props){
    super(props);

    this.addPost = this.addPost.bind(this);
    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);

    this.state = {
      posts: ["Welcome to Discussion Board","Post anything you like :)"],
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
      {this.state.posts.map((postBody, idx) =>{
        return(
          <Postbody key={idx} headPost ={postBody}/>
        )
      })}

      <div className = "panel panel-default">
        <div className = "panel-body">
          <textarea className = "form-control" onChange={this.handlePostEditorInputChange}/>
          <button className = "btn btn-success" onClick = {this.addPost}>Post</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Boardbody;
