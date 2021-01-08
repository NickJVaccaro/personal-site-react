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
                <div>
                    <hr/>
                    <Row key={project.title} className="project-row">
                        <Col md={3} sm={12}>
                            <img className="post-image" src={project.image} alt="" />
                        </Col>
                        <Col>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="post-title">{project.title}</a>
                            {project.description.map(paragraph =>
                                <p>{paragraph}</p>
                            )}
                            <p><strong>Tech/Tools:</strong> {project.stack}</p>
                        </Col>
                    </Row>
                </div>
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
                </Col>
            </Row>
            <Tabs defaultActiveKey="software" id="projects-tabs" className="tabs">
                <Tab eventKey="software" title="Software" className="tab-container">
                    <p>General software projects I've worked on.</p>
                    {getProjectsRender('software')}
                </Tab>
                <Tab eventKey="gamedev" title="Gamedev" className="tab-container">
                    <p>List of games I've developed. For the full list, check out <a href="https://synersteel.com" target="_blank" rel="noopener noreferrer">synersteel.com</a>.</p>
                    {getProjectsRender('gamedev')}
                </Tab>
                <Tab eventKey="hobbies" title="Hobbies" className="tab-container">
                    <p>List of my more significant hobby projects, many of which do not involve any coding at all.</p>
                    {getProjectsRender('hobby')}
                </Tab>
            </Tabs>
            
        </Container>
    )
}