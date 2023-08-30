import React from 'react';

import './Footer.css';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faLinkedin, /*faGithubSquare,*/ faRedditSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    let contactData = [
        { href: 'https://www.linkedin.com/in/nickjvaccaro', icon: faLinkedin, class: 'linkedin' },
        { href: 'https://twitter.com/NickJVaccaro', icon: faTwitterSquare, class: 'twitter' },
        { href: 'https://www.reddit.com/user/NickJVaccaro', icon: faRedditSquare, class: 'reddit' },
        //{ href: 'https://github.com/NickJVaccaro', icon: faGithubSquare, class: 'github' }, // I should maybe use github more often if I'm gonna advertise it...
        { href: 'mailto:njvaccaro0@gmail.com', icon: faEnvelopeSquare, class: 'email' },
    ];

    const iconHtml = contactData.map((data) => 
        <Col key={data.href} className="social-col">
            <a href={data.href} target="_blank" rel="noreferrer" className={'fa-' + data.class + ' fa-clickable'}>
                <FontAwesomeIcon icon={data.icon} size="2x" />
            </a>
        </Col>
    );

    return (
        <Container>
            <hr/>
            <Row className="justify-content-center">
                <Row>
                    { iconHtml }
                </Row>
            </Row>
            <br/>
        </Container>
    )
}
