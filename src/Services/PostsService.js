import axios from 'axios';
import DecoderService from './DecoderService';

const PostService = {

    posts: [],

    getConfig: function() {
        return {
            headers: {
              'Authorization': 'bearer ' + localStorage.getItem('accessToken')
            }
          };
    },

    // gets post with id
    getPostById: function(id) {
        return this.posts.filter(p => p.key === id)[0];
    },

    // gets posts for user
    getPosts: function() {

        // then get users posts
        return new Promise((resolve, reject) => {
            axios.get('https://oauth.reddit.com/hot?limit=100', this.getConfig()).then(response => {
                let posts = response.data.data.children.map((c, index) => {
                    var value = {};
                    value.value = c.data;
                    value.value.read = false;

                    let video = null;

                    if (value.value.secure_media && !value.value.media_embed.content) {
                        console.log(value.value.secure_media);
                        video = {
                            hls: value.value.secure_media.reddit_video.hls_url,
                            dash: value.value.secure_media.reddit_video.dash_url,
                            fallback: value.value.secure_media.reddit_video.fallback_url,
                        }
                    }                    
                    
                    if (value.value.id === 'dh88y2') {
                        console.log(video);
                    }

                    return {
                        subreddit: value.value.subreddit,
                        subreddit_with_prefix: value.value.subreddit_name_prefixed,
                        title: value.value.title,
                        read: value.value.read,
                        key: value.value.id,
                        score: value.value.score,
                        url: value.value.url,
                        index: index,
                        embedded_html: value.value.media_embed.content,
                        self_text_html: value.value.selftext_html,
                        self_text: value.value.selftext,
                        video: video,
                    };
                });

                this.posts = posts;
                resolve(posts);
            }).catch(error => {
                
            });
        });
    },

    // gets post with index
    getPostWithIndex: function(index) {
        return this.posts.filter(p => p.index === index)[0];
    },

    getCommentsForPost: function(id, subreddit) {
        const config = {
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('accessToken')
            }
        };

        return new Promise((resolve, reject) => {
            axios.get('https://oauth.reddit.com/r/' + subreddit + '/comments/' + id, this.getConfig()).then(response => {
                console.log(response);
                let comments = [];
                response.data.map((c, index) => {
                    //console.log(c);

                    comments = c.data.children.map((c1, index1) => {
                        var value = {};
                        value.value = c1.data;

                        return this.getComment(value.value, index1);
                    })
                });

                resolve(comments);
            });
        });  
    },

    getComment: function(c, index) {

        // handle body_html
        let html = '';
        if (c.body_html) {
            html = DecoderService.decodeHtml(c.body_html)
        }
        
        // handle replies
        let replies = [];
        // if (c.replies 
        //     && c.replies.data
        //     && c.replies.data.children
        //     && c.replies.data.children.data) {
        //     replies = c.replies.data.children.data.map(d => {
        //         return d;
        //     });
        // }

        // console.log(replies);
        console.log(c);


        return {
            index: index,
            key: c.id,
            body_html: html,
            score: c.score,
            author: c.author,
            replies: replies
        }
    }
}

export default PostService