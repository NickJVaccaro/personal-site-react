import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogPosts, calculateReadingTime } from '../actions/blogActions';

import Footer from './Footer.js';

import './Blog.css';

export default function Blog () {
    const posts = useSelector(state => state.blog.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        getBlogPosts(dispatch);
    }, [dispatch]);

    const getPostLink = (post) => {
        let link;
        if(post.is_external) {
            link = <a href={post.content} target="_blank" rel="noreferrer noopener" className="post-title">{post.title}</a>
        } else {
            link = <Link to={`post/${post.id}`} className="post-title">{post.title}</Link>
        }
        return link;
    }

    const getMetadata = (post) => {
        let metaData;
        if(post.is_external) {
            metaData = <>External Post</>
        } else {
            metaData = <>Reading Time: {calculateReadingTime(post.content)}</>
        }
        return metaData;
    }

    return(
        <Container>
            <Row>
                <Col>
                    <div className="page-header">
                        <h1>Blog</h1>
                    </div>
                    <hr className="header-hr"/>
                </Col>
            </Row>
            {posts.map(post => 
                <Row key={post.title} className="post-row">
                    <Col md={1}/>
                    <Col md={2} sm={12}>
                        <img className="post-image" src={post.excerpt_image} alt={post.image_alt} />
                    </Col>
                    <Col md={8} className="blog-text-col">
                        {getPostLink(post)}
                        <p className="post-date">
                            Published: {new Date(post.date).toLocaleDateString()} · {getMetadata(post)}
                        </p>
                        <p className="post-excerpt">{post.excerpt}</p>
                    </Col>
                </Row>
            )}
            <Footer />
        </Container>
    )
}