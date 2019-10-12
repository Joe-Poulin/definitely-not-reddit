import axios from 'axios';
import DecoderService from './DecoderService';

const PostService = {

    posts: [],

    // gets post with id
    getPostById: function(id) {
        return this.posts.filter(p => p.key === id)[0];
    },

    // gets posts for user
    getPosts: function(config) {

        // then get users posts
        return new Promise((resolve, reject) => {
            axios.get('https://oauth.reddit.com/hot?limit=100', config).then(response => {
                // console.log(response.data.data.children);
                let posts = response.data.data.children.map((c, index) => {
                    var value = {};
                    value.value = c.data;
                    value.value.read = false;

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
                        self_text: value.value.selftext
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
            axios.get('https://oauth.reddit.com/r/' + subreddit + '/comments/' + id, config).then(response => {
                console.log(response);
                let comments = [];
                response.data.map((c, index) => {
                    //console.log(c);

                    comments = c.data.children.map(c1 => {
                        var value = {};
                        value.value = c1.data;

                        console.log(c1);

                        let html = '';

                        if (value.value.body_html) {
                            html = DecoderService.decodeHtml(value.value.body_html)
                        }
                        
                        return {
                            body_html: html,
                            score: value.value.score,
                            author: value.value.author
                        }
                    })
                    
                    // return {
                    //     body_html: value.value.body_html,
                    //     score: value.value.score,
                    //     author: value.value.author
                    //}
                });

                console.log(comments);

                resolve(comments);
            });
        });  
    },
}

export default PostService