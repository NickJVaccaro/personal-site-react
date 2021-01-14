import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjects } from '../actions/projectsActions';

import './Projects.css';

export default function Projects() {
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch();
    const { tab } = useParams();
    const [tabKey, setTabKey] = useState('software');

    useEffect(() => {
        getProjects(dispatch);
    }, [dispatch]);

    useEffect(() => {
        if(tab) {
            setTabKey(tab);
        } else {
            // If there's no tab param, that means they navigated directly to /projects, so
            // put them on /projects/software. Make sure to account for a trailing / though.
            let currentUrl = window.location.href;
            if(currentUrl.endsWith('/')) {
                currentUrl = currentUrl.substring(0, currentUrl.length - 1);
            }
            window.history.replaceState({}, '', currentUrl + '/software');
            setTabKey('software');
        }
    }, [tab]);

    const getProjectsRender = (type) => {
        return (
            <>
            {projects.map(project =>
                project.type === type &&
                <div key={project.id}>
                    <hr/>
                    <Row className="project-row">
                        <Col md={3} sm={12}>
                            <img className="post-image" src={project.image} alt="" />
                        </Col>
                        <Col>
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

    const selectTab = (key) => {
        window.history.pushState({}, '', window.location.href.replace(tabKey, key));
        setTabKey(key);
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Projects</h1>
                    <p className="subheader">List of projects I've worked on.</p>
                </Col>
            </Row>
            <Tabs activeKey={tabKey} id="projects-tabs" className="tabs" onSelect={(key) => selectTab(key)}>
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