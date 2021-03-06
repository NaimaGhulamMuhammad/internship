import React from 'react';
import Styles from './Styles';
import { Container, Row, Col,Image } from 'react-bootstrap';
import Banner from '../assets/img/banner-7.jpg';
import appImg from '../assets/img/iphone.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import AndroidIcon from '@material-ui/icons/Android';

export const DownloadApp = (props) => (
    <Styles>
        <section className="download-app" style={{backgroundImage: "url(" + Banner + ")"}}>
            <Container>
                <Row>
                    <Col md={5} sm={5} className="hidden-xs"><Image src={appImg} alt="iphone"
                        className="img-responsive" /></Col>
                    <Col md={7} sm={7}>
                        <div className="app-content">
                            <h2>Download Our Best Apps</h2>
                            <h4>Best oppertunity in your hand</h4>
                            <p>Aliquam vest Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus similique vitae error tempora eos dolor!</p>
                            <a href="#" className="btn call-btn"><i className="fa fa-apple">
                                <FontAwesomeIcon icon={faAppleAlt}/>
                                </i>Download</a><a href="#"
                                className="btn call-btn"><i
                                    className="fa fa-android">
                                        <AndroidIcon/>
                                        </i>Download</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Styles>
);



