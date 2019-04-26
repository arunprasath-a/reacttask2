import React, { Component } from 'react';
//import './loginstyles.css';
import "./login.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Spinner } from 'reactstrap';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
        this.onUserName = this.onUserName.bind(this);
        this.onUserPassword = this.onUserPassword.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onUserName(event) {
        this.setState({ userName: event.target.value });
        console.log(this.state.userName);
    }

    onUserPassword(event) {
        this.setState({ password: event.target.value });
        console.log(this.state.password);
    }

    formSubmit(event) {

        alert(`Welcome ${this.state.userName}`);
        console.log(this.state.userName);
        this.props.history.push(`/logout/${this.state.userName}`);

    }


    render() {
        return (
            <React.Fragment>

                <Container>
                    <Row>

                        <Col md="2" ></Col>
                        <Col md="8"><div className="mainDiv">

                            <div className="logo-div">
                                <img id="logo-img-id" src="http://cioal.com/wp-content/uploads/sites/2/2017/01/cisco_logo.png" alt="Logo"></img>

                            </div>
                            <br />
                            <div className="formDiv">
                                <form onSubmit={this.formSubmit}>

                                    <div className="inputDiv">

                                        <InputGroup>
                                            <Input placeholder="" type="text" value={this.state.userName} onChange={this.onUserName} />
                                            <InputGroupAddon addonType="append" >username</InputGroupAddon>
                                        </InputGroup>

                                        <br />

                                        {/* <label>
                Name: <input type="text" placeholder="Name here" value={this.state.userName} onChange={this.onUserName} required></input>
            </label> */}

                                        <InputGroup>
                                            <Input placeholder="" type="password" value={this.state.password} onChange={this.onUserPassword} />
                                            <InputGroupAddon addonType="append" >Password</InputGroupAddon>
                                        </InputGroup>

                                        {/* <label className="passwordLabel">
                Password: <input type="password" placeholder="Password here" value={this.state.password} onChange={this.onUserPassword} required></input>
            </label> */}
                                    </div>
                                    <br />
                                    <div className="btnDiv">
                                        <Button color="primary" type="submit" value="submit">Log In!</Button>

                                        {/* <input type="submit" value="submit"></input> */}
                                        {/* <Link to="/logout">LOG IN</Link> */}
                                        {/* <Spinner className="spinnerDiv" color="primary" type="grow" /> */}
                                        <h3>click to login</h3>
                                    </div>
                                </form>
                            </div>
                        </div></Col>
                        <Col md="2"></Col>


                    </Row>
                </Container>
            </React.Fragment>
        );
    }
};

export default login;