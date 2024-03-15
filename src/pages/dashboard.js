import { Container, Row, Col, Button, Card, Form, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import { LayoutTwo } from '../components/Layout';
import Image from 'next/image';
import "../../node_modules/uikit"
import 'uikit/dist/css/uikit.min.css'; // uikit CSS
import UIkit from 'uikit'; // uikit JavaScript


const FadeTransitionImage = ({ texturePaths, frameIndex }) => {
    const { invalidate } = useThree();
    const textures = useLoader(TextureLoader, texturePaths);
    const texture = textures[frameIndex] || textures[0];

    useEffect(() => {
        invalidate();
    }, [texture, invalidate]);

    return (
        <mesh scale={[1, 1, 1]}>
            <planeGeometry args={[8, 8]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    );
};

const Dashboard = () => {
    const [donationAmount, setDonationAmount] = useState(0);
    const [currentDonation, setCurrentDonation] = useState(0);
    const boyTexturePaths = [
        '/textures/boy-sitting.jpg',
        '/textures/boy_halfway_up_1.jpg',
        '/textures/boy_halfway_up_2.jpg',
        '/textures/boy_halfway_up_3.jpg',
        '/textures/boy-standing.jpg',
    ];
    const dripTexturePaths = [
        '/textures/drip_cropped_0_0.png',
        '/textures/drip_cropped_0_1.png',
        '/textures/drip_cropped_0_2.png',
        '/textures/drip_cropped_1_0.png',
        '/textures/drip_cropped_1_1.png',
        '/textures/drip_cropped_1_2.png',
    ];
    const dripFrames = dripTexturePaths.length - 1;
    const [dripFrameIndex, setDripFrameIndex] = useState(0);
    const [boyFrameIndex, setBoyFrameIndex] = useState(0);

    const handleRegister = () => {
        // Registration logic
    };

    const handleAttachCard = () => {
        // Logic to attach a card
    };

    // Update the frame index for the drip based on donation amount
    useEffect(() => {
        const newDripFrameIndex = Math.floor((donationAmount / 100) * dripFrames);
        setDripFrameIndex(newDripFrameIndex);
    }, [donationAmount, dripFrames]);

    // Update the frame index for the boy after reaching $100
    useEffect(() => {
        let interval;
        if (donationAmount >= 100 && boyFrameIndex < boyTexturePaths.length - 1) {
            interval = setInterval(() => {
                setBoyFrameIndex((prevIndex) => {
                    const nextIndex = prevIndex + 1;
                    if (nextIndex >= boyTexturePaths.length - 1) {
                        clearInterval(interval);
                    }
                    return nextIndex;
                });
            }, 500); // Time in ms between frame changes
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [donationAmount, boyFrameIndex, boyTexturePaths.length]);

    const handleDonation = (amount) => {
        console.log(amount)
        setDonationAmount(donationAmount + amount);
    };
    return (
      <Container fluid>
        {/* Main Content */}
        <Row>
          <Col xs={12} md={3} lg={2} className=" p-3 vh-100" style={{backgroundColor:'#38040e'}} >
            <ListGroup className="vh-100">
              <ListGroup.Item>
                <h5>Name:</h5>
                <p>John Doe</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Rank:</h5>
                <p>Gold Member</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>no. of lifes saved:</h5>
                <p>42</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="" className="w-100 mb-2" style={{background:'#640d14'}}>
                  Invite
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="" className="w-100 mb-2" style={{background:'#800e13'}} >
                  Share Progress
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="" className="w-100" style={{background:'#ad2831'}} >
                  Card Details
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={12} md={6} lg={10}>
            <Col>
              <div
                className="uk-flex uk-flex-center uk-flex-middle "
                style={{height: "100vh" , backgroundColor:'antiquewhite'  }}
              >
                <div className='boyimg ' >
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[20, 10, 10]} />
                    <OrbitControls enableZoom={false} />
                    <group>
                      <FadeTransitionImage
                        texturePaths={boyTexturePaths}
                        frameIndex={boyFrameIndex}
                      />
                    </group>
                  </Canvas>
                </div>

                <div className='donate-items '>
                <div  className='uk-grid uk-child-width-1-4 items-grid uk-grid-collapse ' uk-grid = "" >
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              <div ><img src="/assets/images/Apple.png" alt="" /></div>
              </div>

              <button className="uk-button uk-button-danger ">
                    {" "}
                    Donate{" "}
                  </button>
              
              </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
};

export default Dashboard;



{/* <Col>
                         Canvas for the donation visual 
                        <div className="canvas-wrapper mb-3" style={{ height: "300px", width: "300px" }}>
                            <Canvas>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[20, 10, 10]} />
                                <OrbitControls enableZoom={false} />
                                <group >
                                    <FadeTransitionImage
                                        texturePaths={boyTexturePaths}
                                        frameIndex={boyFrameIndex}
                                    />
                                </group>
                            </Canvas>
                        </div>
                    </Col> */}



{/* Donation form */}
{/* <Form className="my-3">
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Col sm={9}>
                                    <Form.Control type="number" placeholder="Enter Amount" onChange={(e) => setCurrentDonation(Number(e.target.value))} />
                                </Col>
                                <Col sm={3}>
                                    <Button variant="outline-primary" onClick={(e) => handleDonation(currentDonation)} >Donate</Button>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 1 }}>
                                    <Button variant="outline-secondary" onClick={handleAttachCard}>Attach Card</Button>
                                </Col>
                            </Form.Group>
                        </Form> */}