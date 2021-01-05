import React, { useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../actions/projectsActions';

import './Projects.css';

export default function Projects() {
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        getProjects(dispatch);
    }, [dispatch]);

    const getProjectsRender = (type) => {
        return (
            <>
            {projects.map(project =>
                project.type === type &&
                <Row key={project.title} className="post-row">
                    <Col md={3} sm={12}>
                        <img className="post-image" src={project.image} alt="" />
                    </Col>
                    <Col>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="post-title">{project.title}</a>
                        {project.description.map(paragraph =>
                            <p>{paragraph}</p>
                        )}
                        <p><strong>Tech Stack:</strong> {project.stack}</p>
                    </Col>
                </Row>
            )}
            </>
        )
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Projects</h1>
                    <p className="subheader">List of projects I've worked on.</p>
                    <hr/>
                </Col>
            </Row>
            <Tabs defaultActiveKey="software" id="projects-tabs" className="tabs">
                <Tab eventKey="software" title="Software" className="tab-container">
                    {getProjectsRender('software')}
                </Tab>
                <Tab eventKey="gamedev" title="Gamedev" className="tab-container">
                    {getProjectsRender('gamedev')}
                </Tab>
            </Tabs>
            
        </Container>
    )
}