import React, { Component } from 'react';
import './MainContent.css'
import MainContentHome from './MainContentHome/MainContentHome';
import MainContentPost from './MainContentPost/MainContentPost';
import { Route, Switch } from 'react-router-dom';

class MainContent extends Component {

    render() {
        return (
            <div className="MainContent">            
                <Switch>
                    <Route path="/:id" 
                        exact 
                        component={MainContentPost}
                        posts={this.props.posts}/>
                    <Route path="/"
                        render={(routeProps) => 
                            (<MainContentHome {...routeProps} 
                                gettingPosts={this.props.gettingPosts}
                                posts={this.props.posts}/>)}/>
                </Switch>
            </div>
        ) 
    }

};

export default MainContent;