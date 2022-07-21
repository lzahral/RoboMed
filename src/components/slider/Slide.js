import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Dr_1 from '../../images/Dr-1.png';
import { Div, P } from '../../App';

const Slide = () => {
    return (
        <Div>
            <Row xs={1} md={2} className=' p-4' >
                <Col className='p-3' xs={12} md={4} lg={3}><br /><Image src={Dr_1} alt="Dr image" /></Col>
                <Col className='text-start'>
                    <br />
                    <br />
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egest in nisl</P>
                    <h3>Roberta Fitzgerald</h3>
                </Col>
            </Row>
        </Div>
    );
};

export default Slide;