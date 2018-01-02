import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
    
    render () {
        
        return (
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink exact 
                                to="/posts/"
                                activeClassName="my-active"
                                activeStyle={{
                                    color:'#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts </NavLink> </li>
                                <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post </NavLink> </li>
                             </ul>
                         </nav>
                    </header>
                    {/* <Route path="/" exact render={() => <h1> Home </h1> }/>
                    <Route path="/" render={() => <h1> Home again </h1> }/>  */}
                    
                    <Switch>    
                        <Route path="/new-post" component={ NewPost } />
                        <Route path="/posts" component={Posts} />
                        {/* <Route path="/:id" exact component={FullPost} /> */}
                    </Switch>

                </div>
                
        );
    }
}

export default Blog;