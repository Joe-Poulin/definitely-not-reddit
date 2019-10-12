import React, {Component} from 'react';
import './MainContentPost.css';
import MainContentPostHeader from './MainContentPostHeader/MainContentPostHeader';
import Post from './Post/Post';
import PostsService from '../../Services/PostsService';
import PostComment from './Post/PostComment/PostComment';

class MainContentPost extends Component {

    state = {
        postComments: [] 
    };

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.previousClicked = this.previousClicked.bind(this);
        this.nextClicked = this.nextClicked.bind(this);
    }

    goBack() {
        this.props.history.replace(this.props.post.key, '');
    }

    previousClicked(id) {
        const prevPost = PostsService.getPostWithIndex(PostsService.getPostById(id).index - 1);
        if (prevPost) {
            this.props.history.push(prevPost.key)
            this.setState({postComments: []});
        }
    }

    nextClicked(id) {
        const nextPost = PostsService.getPostWithIndex(PostsService.getPostById(id).index + 1);
        if (nextPost) {
            this.props.history.push(nextPost.key)
            this.setState({postComments: []});
        }
    }

    loadCommentsClicked = (post) => {
        PostsService.getCommentsForPost(post.key, post.subreddit).then(comments => {
            this.setState({postComments: comments.map(c => <PostComment comment={c}/>)});
        });
    }
    
    render() {
        const postId = this.props.match.params.id;
        var post = PostsService.getPostById(postId);

        // if no post is found, the page was likely refreshed,
        // and we should send the user back to the home screen
        if (!post) {
            this.props.history.replace(postId, '');
            return null;
        }

        post.read = true;
    
        return(
            <div className="MainContentPost">
                <MainContentPostHeader goBackClicked={this.goBack} 
                    previousClicked={this.previousClicked}
                    nextClicked={this.nextClicked}
                    post={post}/>
                <div className="Scroll">
                    <Post post={post}
                        postComments={this.state.postComments}
                        loadCommentsClicked={this.loadCommentsClicked}/>
                </div>
            </div>
        );
    } 
};

export default MainContentPost;