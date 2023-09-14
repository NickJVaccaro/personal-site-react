import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Footer from './Footer.js';

import './About.css';

export default function Home() {
    let expertises = [
        { key: 'Languages', value: 'C#, Java, SQL, JavaScript' },
        { key: 'Databases', value: 'MySQL/MariaDB, MongoDB, Oracle' },
        { key: 'Code Tools', value: 'Unity3D, AWS, IBM Cloud, Git, SVN, Docker' },
        { key: 'Project Tools', value: 'Asana, Miro, Figma, Discord, Slack' },
        { key: 'Web Frameworks', value: 'ReactJS, React Native, NodeJS, .NET/Core' }
    ];

    const expertiseHtml = expertises.map((expertise) => 
        <Row className="expertise-row" key={expertise.key}>
            <Col xs={4} className="expertise-key">
                <p>{ expertise.key }</p>
            </Col>
            <Col className="expertise-value">
                <p>{ expertise.value }</p>
            </Col>
        </Row>
    )
    return (
        <Container className="about-container">
            <Row className="about-row">
                <Col>
                    <div className="header-with-subheader">
                        <h1>About</h1>
                        <p className="subheader">Nick Vaccaro, Game Programmer</p>
                    </div>
                    <hr className="header-hr"/>
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={12} className="about-content">
                    <p>Hi, I'm Nick!</p>
                    <p><b>I'm a professional programmer</b> with 11 years of experience, the last 3 of which I've worked on <a href="https://projectgorgon.com/" target="_blank" rel="noopener noreferrer">Project: Gorgon</a>, a live MMORPG built in Unity. Before that, I released 4 commercial games under my indie game studio <a href="https://synersteel.com/" target="_blank" rel="noopener noreferrer">Synersteel</a>, and worked as a Full-Stack Web Developer with everything from ASP.NET to React & Node.</p>
                    <p><b>I'm used to small teams</b> and wearing many hats, with an affinity for the developing, project managing, and QA hats. <b>I'm focused on results</b>, and do whatever I can to help the entire team succeed.</p>
                    <p>You can see a list of my projects <Link to="/projects">here</Link>.</p>
                    <p>My expertise lies in:</p>
                    { expertiseHtml }
                </Col>
                <Col lg={4} md={12} className="text-center">
                    <img src="/img/me512.jpg" className="figure-img img-fluid rounded border img-me" alt="Nick looking pretty happy"/>
                    <div className="about-info">
                        <Footer />
                        <a href="assets/NickVaccaroResume.pdf" target="_blank">View Resume</a>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="about-personal">
                    <p>I've been interviewed on a few occasions, if you can believe it.</p>
                    <ul>
                        <li><a href="https://indiegameinternational.libsyn.com/nick-vaccaro-synersteel-studio-valley-of-shadow">Indie Game International</a>, a gamedev podcast</li>
                        <li><a href="https://www.youtube.com/watch?v=-pa7aE__vI8">LevFleetwood Interview</a>, a twitch Streamer</li>
                    </ul>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="about-personal">
                    <p><b>When I'm not coding</b>, I like playing games (naturally), running, attending Ren Faires, and playing the occasional D&D campaign. <br/>Some of my favorite games are The Witness, Overwatch, EverQuest, Outer Wilds, Morrowind, 7 Days to Die, & Conan Exiles.</p>
                    <br/>
                </Col>
            </Row>
        </Container>
    )
}
