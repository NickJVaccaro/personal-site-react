import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogPost, calculateReadingTime } from '../actions/blogActions';
import { useParams } from 'react-router-dom';

import './Blog.css';
import './Post.css';

let md = require('markdown-it')();

export default function Post () {
    const post = useSelector(state => state.blog.currentPost);
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        getBlogPost(id, dispatch);
    }, [id, dispatch]);

    const convertToMarkdown = content => {
        if(!content) return;
        let result = md.render(content);
        return {__html: result};
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{post.title}</h1>
                    <p className="text-center post-date">
                        Reading Time: {calculateReadingTime(post.content)} · 
                        Published: {new Date(post.date).toLocaleDateString()}
                    </p>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col dangerouslySetInnerHTML={convertToMarkdown(post.content)} className="post-content">
                </Col>
            </Row>
        </Container>
    )
}