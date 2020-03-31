import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component{
    state = {
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
         .then(res => {
             this.setState({
                post: res.data
             })
         })
    }
    render(){

        const postList = this.state.post ? (
            <div className="post">
                <p className="center">{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading ...</div>
        )
        return(
            <div className="container">
                {postList}
            </div>
        )
    }
}

export default Post