import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogPosts, calculateReadingTime } from '../actions/blogActions';

import './Blog.css';

export default function Blog () {
    const posts = useSelector(state => state.blog.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        getBlogPosts(dispatch);
    }, [dispatch]);

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Blog</h1>
                    <p className="subheader">
                        Where I write about tech & games
                    </p>
                    <hr/>
                </Col>
            </Row>
            {posts.map(post => 
                <Row key={post.title} className="post-row">
                    <Col lg={3}>
                        <img className="post-image" src={post.excerpt_image} alt={post.image_alt} />
                    </Col>
                    <Col>
                        <Link to={'post/' + post.id} className="post-title">{post.title}</Link>
                        <p className="post-date">
                            Reading Time: {calculateReadingTime(post.content)} ·
                            Published: {new Date(post.date).toLocaleDateString()}
                        </p>
                        <p className="post-excerpt">{post.excerpt}</p>
                    </Col>
                </Row>
            )}
        </Container>
    )
}