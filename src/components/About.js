import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './About.css';

export default function Home() {
    let expertises = [
        { key: 'Languages', value: 'JavaScript, C#, SQL, Java, CSS' },
        { key: 'Frameworks', value: 'ReactJS, NodeJS, .NET/Core, AngularJS' },
        { key: 'Code Tools', value: 'AWS, Git, MySQL, IIS, Docker' },
        { key: 'Project Tools', value: 'Asana, Slack, Trello, MediaWiki' }
    ];

    const expertiseHtml = expertises.map((expertise) => 
        <Row className="expertise-row">
            <Col md={4} className="expertise-key">{ expertise.key }</Col>
            <Col className="expertise-value">{ expertise.value }</Col>
        </Row>
    )
    return (
        <Container className="about-container">
            <Row className="about-row">
                <Col>
                    <h1>About</h1>
                    <hr/>
                    <h2>Full Stack Developer</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={12} className="about-content">
                    <p>I have 7+ years of experience doing back-end, front-end, gamedev, tutorials, code reviews, bug reports, and production deployments. I'm focused on results, and do whatever I can to help the entire team succeed.</p>
                    <p>I am co-founder of an indie video game company called <a href="http://synersteel.com" target="_blank">Synersteel Studio</a>, and have commercially released 4 games across 3 platforms.</p>
                    <p>You can see some of my projects <Link to="/projects">here</Link>.</p>
                    <p>My expertise lies in:</p>
                    { expertiseHtml }
                </Col>
                <Col lg={4} md={12} className="text-center">
                    <img src="/img/me512.jpg" className="figure-img img-fluid rounded border img-me"/>
                    <div className="about-info">
                        <p><a href="mailto:njvaccaro0@gmail.com">njvaccaro0@gmail.com</a></p>
                        <p><a href="assets/NickVaccaroResume.pdf" target="_blank">View Resume</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
