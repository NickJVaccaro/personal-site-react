import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../actions/projectsActions';

import Footer from './Footer.js';

import './Projects.css';

export default function Projects() {
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        getProjects(dispatch);
    }, [dispatch]);

    const getRecentProjects = () => {
        return (
            <>
            {projects.map(project =>
                project.is_recent == true &&
                <div key={project.id}>
                    <hr/>
                    <Row className="project-row">
                        <Col md={3} sm={12}>
                            <img className="post-image" src={project.image} alt="" />
                        </Col>
                        <Col className="blog-text-col">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="post-title">{project.title}</a>
                            {project.description.map((paragraph, index) =>
                                <p key={index}>{paragraph}</p>
                            )}
                            <p><strong>Tech/Tools:</strong> {project.stack}</p>
                        </Col>
                    </Row>
                </div>
            )}
            </>
        )
    }

    const getOtherProjects = () => {
        return (
            <>
            <Row>
                <Col>
                    <table className="table table-sm table-striped projects-table">
                        <tbody>
                        {projects.map(project =>
                            project.is_recent == false &&
                            <tr>
                                <td><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></td>
                                <td>{project.short_desc}</td>
                                <td className="project-stack">{project.stack}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </Col>
            </Row>
            </>
        )
    }

    return(
        <Container>
            <Row>
                <Col>
                    <div className="header-with-subheader">
                        <h1>Projects</h1>
                        <p className="subheader">Games I'm actively working on</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {getRecentProjects()}
                    <hr/>
                    <div className="header-with-subheader">
                        <h2>Previous Projects</h2>
                        <p className="subheader">Click to visit any project for more details</p>
                    </div>
                    <hr className="header-hr"/>
                    {getOtherProjects()}
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}