import React, { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogPosts } from '../actions/blogActions';

import './Blog.css';

export default function Blog () {
    const posts = useSelector(state => state.blog.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        getBlogPosts(dispatch);
    }, [dispatch]);

    const calculateReadingTime = (post) => {
        let minutes = post.content.split(' ').length / 130;
        if (minutes < 1) minutes = 1;
        return minutes + ' minute' + (minutes > 1 ? 's' : '');
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Blog</h1>
                    <hr/>
                </Col>
            </Row>
            {posts.map(post => 
                <Row key={post.title} className="post-row">
                    <Col>
                        <a href={'post/' + post.id} className="post-title">{post.title}</a>
                        <p className="post-date">
                            Reading Time: {calculateReadingTime(post)} ·
                            Published: {new Date(post.date).toLocaleDateString()}
                        </p>
                        <p className="post-content">{post.content}</p>
                    </Col>
                </Row>
            )}
        </Container>
    )
}