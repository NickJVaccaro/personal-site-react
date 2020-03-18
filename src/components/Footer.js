import React from 'react';

import './Footer.css';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    let contactData = [
        { href: 'mailto:njvaccaro0@gmail.com', icon: faEnvelopeSquare, class: 'email' },
        { href: 'https://twitter.com/NickJVaccaro', icon: faTwitterSquare, class: 'twitter' },
        { href: 'https://www.linkedin.com/in/nickjvaccaro', icon: faLinkedin, class: 'linkedin' },
        { href: 'https://github.com/NickJVaccaro', icon: faGithubSquare, class: 'github' }
    ];

    const iconHtml = contactData.map((data) => 
        <Col>
            <a href={data.href} className={'fa-' + data.class + ' fa-clickable'}>
                <FontAwesomeIcon icon={data.icon} size="3x" />
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
        </Container>
    )
}
