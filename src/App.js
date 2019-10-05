import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';
import RightSidebar from './RightSidebar/RightSidebar';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import PostsService from './Services/PostsService';
import keys from './private/keys.json';

class App extends Component {

  environment = keys.localEnv;
  //environment = keys.prodEnv;

  startingUrl = this.environment.startingUrl;
  user = this.environment.clientId;
  pw = this.environment.clientSecret;

  randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  redditOauthUrl = "https://www.reddit.com/api/v1/authorize?client_id="+this.user+"&response_type=code" + "&" + "state="+this.randomString+"&redirect_uri="+this.startingUrl+"&duration=permanent&scope=read"
  redditGetTokenUrl = "https://www.reddit.com/api/v1/access_token";

  accessToken = '';
  refreshToken = '';

  state = {
    posts: []
  };

  // when the app loads authenticate with reddit
  componentDidMount() {

    let params = new URLSearchParams(window.location.search);
    let code = params.get('code');
    let state = params.get('state');

    let storedAccessToken = localStorage.getItem("accessToken");
    let storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedAccessToken === "undefined") storedAccessToken = null;
    if (storedRefreshToken === "undefined") storedRefreshToken = null;

    if (code && state) {
      // we've been authorized by the user thru 
      // reddit's api to use the users data
      //
      // check if the 'state' received equals the random 
      // string we sent with the request
      //if (state === this.randomString) {
        var base64encodedData = new Buffer(this.user + ':' + this.pw).toString('base64');

        // now we get the token with the 'code' variable we received
        const headers = {
          'Authorization': 'Basic ' + base64encodedData,
          'Content-Type': 'application/x-www-form-urlencoded'
        }

        const data = "grant_type=authorization_code&code=" + code + "&redirect_uri=" +  this.startingUrl;

        axios.post(this.redditGetTokenUrl, data, {
          headers: headers
        }).then(response => {
          // if successful, extract the tokens
          this.accessToken = response.data.access_token;
          this.refreshToken = response.data.refresh_token;

          // if no accessToken is present, try the token stored in 
          // the localStorage
          if (!this.accessToken || this.accessToken === "undefined") {
            this.accessToken = storedAccessToken;
          } else {
            localStorage.setItem("accessToken", this.accessToken);
            localStorage.setItem("refreshToken", this.refreshToken)
          }

          this.sendGetPostsRequest();

      }).catch(error => {
        // retry with the stored token
        this.sendGetPostsRequest();
      });
      /*} else {
        console.log('something has gone horribly wrong');
      }*/
    /*} else if (this.storedAccessToken || this.storedAccessToken === "undefined") {
      // check the browser's cach for an access token
      this.sendGetPostsRequest();*/ 
    } else {
      window.location = this.redditOauthUrl;
    }
  }

  // calls the PostService to get the posts,
  sendGetPostsRequest() {

    const config = {
      headers: {
        'Authorization': 'bearer ' + this.accessToken
      }
    };

    PostsService.getPosts(config).then(posts => {
      this.setState({posts: posts});
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopBar/>
          <div className="SubTopBar">
            <SideBar/>
            <MainContent posts={this.state.posts}/>
            <RightSidebar/>
          </div>
        </div>
    </BrowserRouter>
    );
  }

}

export default App;
