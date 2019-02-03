import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../action/postAction'

class Post extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItems = this.props.posts.map(
            post => (
                <tr key={post.TransactionID}>
                    <td style={{ 'margin': '.5%', 'padding': '5px', 'display': 'block' }}>{post.UserName}</td>
                    <td>{post.TransactionID}</td>
                    <td>{post.UserName}</td>
                    <td>{post.PaymentMode}</td>
                    <td>{post.Amount}</td>
                </tr>
            )
        );
        return (
            <div>
                <h1>Posts</h1>
                <table width='100%' border='1'>

                    {postItems}
                </table>
            </div>
        )
    }
}

Post.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => (
    {
        posts: state.posts.items,
        newPost: state.posts.item
    }
);

export default connect(mapStateToProps, { fetchPosts })(Post)
