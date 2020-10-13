import React, { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogPost } from '../actions/blogActions';
import { useParams } from 'react-router-dom';

import './Blog.css';

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
        console.log('result', result);
        return {__html: result};
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{post.title}</h1>
                    <p className="text-center post-date">Reading Time: blah · Published: {new Date(post.date).toLocaleDateString()}</p>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col dangerouslySetInnerHTML={convertToMarkdown(post.content)}>
                    {/* <p className="post-content">{convertToMarkdown(post.content)}</p> */}
                </Col>
            </Row>
        </Container>
    )
}