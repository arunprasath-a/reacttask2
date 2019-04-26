import React, { Component } from 'react';
import "./dashBoard.css";
import { Container, Row, Col } from 'reactstrap';

class DashBoardContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <React.Fragment>

                <Container className="dashBoardContainer col-12">
                    <row>
                        <Col xs="6">
                            <div className="dashMainDiv">
                                <div className="content">
                                    <p>Dashboard Business Critical Insights</p>
                                </div>
                            </div></Col>
                        <Col xs="6">.col-6</Col>
                    </row>
                </Container>
            </React.Fragment>


        )
    }
}

export default DashBoardContent;