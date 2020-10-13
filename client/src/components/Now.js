import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getNowData } from '../actions/nowActions';

import './Now.css';

export default function Now() {
    const nowData = useSelector(state => state.now);
    const lastUpdated = nowData.updated ? new Intl.DateTimeFormat('en-US').format(new Date(nowData.updated)) : '';
    const foci = JSON.parse(nowData.foci);
    const dispatch = useDispatch();

    useEffect(() => {
        getNowData(dispatch);
    }, [dispatch]);

    let fociHtml = foci ? (<ul>
        {foci.map(focus => 
            <li key={focus.text}>{focus.text} {focus.link ? (<a href={focus.link} target='_blank' rel="noopener noreferrer">(Link)</a>) : ''}</li>
        )}
    </ul>) : <div></div>;

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Now</h1>
                    <hr/>
                </Col>
            </Row>
            <p>This is my <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>.</p>
            <p>I'm current living in {nowData.location}.</p>
            <p>Here's what I'm focused on these days:</p>
            {fociHtml}
            <p className="last-updated">Last Updated {lastUpdated}</p>
        </Container>
    )
}