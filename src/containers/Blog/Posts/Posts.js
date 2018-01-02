import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';



class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map (post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error)
                //this.setState({error: true})
            })
    }

    postsSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    posts
    render () {
        let posts = <p style={{textAlign:'center'}}> Something went wrong </p>
        if(!this.state.error){
            posts = this.state.posts.map (posts => {
                return (
                    <Post 
                        key={posts.id} 
                        title={posts.title} 
                        author={posts.author}
                        clicked={() => this.postsSelectedHandler(posts.id)}/>
                );
            })
        } 
        return (
            <section className="Posts">
                { posts }
            </section>
        )
    }

}


export default Posts