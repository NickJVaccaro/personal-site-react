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
        {foci.map(focus => {
            let render;
            if(focus.link) {
                render = <a href={focus.link} target="_blank" rel="noopener noreferrer">{focus.text}</a>;
            } else {
                render = focus.text;
            }

            return (
                <li key={focus.text}>
                    {render}
                </li>
            )
        })}
    </ul>) : <div></div>;

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Now</h1>
                    <p className="subheader">
                        This is my <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>
                    </p>
                    <hr/>
                </Col>
            </Row>
            <p>I'm currently living in {nowData.location}.</p>
            <p>Here's what I'm focused on these days:</p>
            {fociHtml}
            <p className="last-updated">Last Updated {lastUpdated}</p>
        </Container>
    )
}