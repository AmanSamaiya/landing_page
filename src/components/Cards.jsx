import React from 'react';
import Card from 'react-bootstrap/Card';
import gearblue from '../images/gearblue.png';
import gear from '../images/gear.png';


export default function Cards(props) {
    return (
        <div className='flip-card'>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card  style={{ width: '14rem', height: '18rem' }}>
                        <Card.Body>
                            <img alt='' className='change' src={gearblue} style={{ width: '3rem', height: '3rem' }} />
                            <Card.Title><h5>{props.title}</h5></Card.Title>
                            <Card.Text>
                                <p>{props.data}</p>
                            </Card.Text>
                            <img alt='' src={gear} style={{ width: '2rem', height: '2rem' }} />
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card style={{ width: '14rem', height: '18rem' }}>
                        <Card.Body>
                            <Card.Text>
                                <h5>Join us now for best in demand services in the industry!</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
