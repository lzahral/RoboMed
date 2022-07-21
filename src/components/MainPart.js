import React from 'react';
import robo_l from '../images/robo-light.png';
import robo_d from '../images/robo-dark.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import vector from '../images/bg-vectors/1.png'
import { P, Div, Button } from '../App';

const MainPart = ({ theme }) => {
    return (
        <Div className='overflow-hidden position-relative div p-5'>
            <Image className='d-none d-md-inline' src={vector} style={{ position: 'absolute ', top: '-0px', left: '0px', zIndex: '-1', width: '100%' }} />
            <Row xs={1} md={2}>
                <Col xs={12} md={6}>
                    <h1>Your Health Is</h1>
                    <h1>Our Top Priority</h1>
                    <P className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut</P>
                    <Button >Login to System</Button>
                </Col>
                <Col className='text-center'>
                    <Image className='m-3' src={theme ? robo_l : robo_d} fluid />
                </Col>
            </Row>

            <Row xs={1} md={3} className='text-center py-3'>
                <Col >
                    <h3>+216</h3>
                    <p>Healthcare Facility</p>
                </Col>
                <Col>
                    <h3>+423</h3>
                    <p>Professional Doctor</p>
                </Col>
                <Col>
                    <h3>+669</h3>
                    <p>Staff all oaround the world</p>
                </Col>
            </Row>
        </Div>
    );
};

export default MainPart;