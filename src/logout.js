import React, { Component } from 'react';
import './logout.css';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaCog } from "react-icons/fa";
import  DashBoardContent  from "./dashBoard";


class logout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="headContainerDiv">
                    <Container className="headContainer col-12">
                        <Row className="headerRow">

                            <Col xs="2"><p className="headerLeft">Welcome <span className="headerUserName">{this.props.match.params.userName}!!</span></p></Col>
                            <Col xs="7" className="headerMiddle">
                                <div className="headerMiddleDiv">
                                    <div className="headerLogo">
                                        <img className="headerIMG" alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAZlBMVEX///8En9kAmdcAnNgAl9YAm9jR6fYAoNklpNvE4fMAltaFxuhjuOLW6/douuOLyOjl8/qYzuuw2e/w+Py73fH2+/3e7/jo9Po4qt2r1u7K5fRRsuB6weZJr9+s1+5lueOWzeoAkNQFMXXEAAALM0lEQVR4nO2d57qrKhCGl5QUTbPGtJ2c+7/Jo2nSBpCoWfuc+Z78i8L4UoRhwJ8fFAqFQqFQqL9b+bJYf9uGRlWxzL9tg7fyU0w4ibIvm1FEjRXxaf9lMzxVERq1YuevmrGN71ZQUn3VDF9FL7Fv1rZl/DKDftEKbx34G1v0RTMWbyN4+kUzfHWib3u/2Dj27G0FvXzNCn91hRyR5desmJHOjG9WeV8J1PjvoDb/mhX+QmohQmohQmohQmohQmohQmohQmohQmohQmohQmohQmohQmohQmohQmohQmpmlcs/Bbxi5kdtlmWfOnqrIpvB6XtRy4s/y/JDMzyVMMJ5fIVy86GWRYxzVn/CrarbJCi0oONDrbzGnJNpltLqx2oKjYDq5kEteTr14/AWPIufy4cJ8L+bWh49kqCLYCu8dX4tQdHafIGbWrfoRkKXxsv3QhhA3oNa/VoW4tdAK7yVv584YkfjFW5qwqIbUFOcunULYeaa4qY261ax4l2gGb7KutVOan5kJzUBPPDIbtVdEsxYX93Utt2T8EOgGb5KBWob4xVOamvhgXigGV0KETHG4bipbbrqyreBZvhqYGqh0QTdEw9BjSK1h5CaQUgtREgtREgtREgtREgtREgtREgtRL+O2v5wPh9AV91k1I7b89bsHmg1FbWygZF6xN4nMaWUMygCeCJq+wXhjRULyBkxEbWU8YZG7PTMrJ65EeDKaajt2dNhyIBynobay3tKVub/X8remcVmn/w01N4OQ8j1OQm1dec9te+c6B6ZnowXTEJNcBgSc+FNQm3lcn0+VXbmRsx4xSTUhEyALRaTUBO2mzDbStbud1BLhAcy96+TUBN8zszmI5eoGfH+n6iJMJDaQ0hNF1IzCKnpQmq6kJpBSE0XUtOF1EQhNV1ITdd/mpo5OuYvo7YX8oqNVwxBTbDGXNe2znCfLoURY4qE2TuxesGZK69CcOLcjFc4qZWCNWano3AkCBBadukeOTa2CTe1m5CJ2ekoPInZAfRS54gDwhgFD1xsDkZ2x0p2jwx4z4S4wNgcg9pxBU7rcFOrnJl0cYHU7gLfv5PigB8ufWHjQEpuapXzMJzk9cxgCOr8RT42H77lEZd7fUGB1kiE4F9HCOryEVtNGXgS2OaBjQAefZ8Y8OyZCQdD50+PTJjZDd9oT++PROM/5v99IufrxzUMrEjPc6qoO1Z9d2KEsZUlODubM0IoePiPz36D6hITRjYWt/KhyYRFlnjZ8syaKy5Q4Xrt0kgpIWwOcG+Vb9pMTj77Isr12rHfYz+z1Fi/vS3l2mXKzpbJXdUaLlvPHUG7mWuJ2AljGOE+qhAhtRAhtRAhtRAhtRDhqXUhwhMSQ4SncQbpbe4vOfk1dIfbtKqeIXvku6cMP0P2LDPq36X9Keacjb7p0qWMMs7jy9g7ZofTvijg4w+m07oo/pJTwFEoFAqFQqFQKBQKhUKhUCgUCoX6T6jM86E+bFrm+33/WLHGgJ439b9jQOVFcooII82PL07bwrQWtJt1sq3Dr9Prok2KMMbr1TbzWozbZecLZexx0/Xm8VlaweToklhO5R5JeVq3x6p0UQGUs2ijgTnH5CU4xDbfRk1akZgWIYvCbkC1ncsGcM4Wia0OlQfJ5NbiOp0SXLVhQlhCt9aurYCKm1SgmOHEmJY9zOB4YdRwExDL32p/JoZsKNtMtfRXbmKTyabNDm5q68jEzE6tqonZAAZSSwCTIxpPEyGQASYHUStiKC2YGkgApHak5qJ55ETho7cG04bA+femtoSgwdTyGiYAUNuCuTzkPvPqU1ls7k8tt5QAQG1HoYoGUrvCuTxFwDfVMFpYbO5P7QKnBlCrrASM1E6Wcn7nNmpgYG2D1pvakVnSMlLL7QRM1DYe0Jzbyz6Sw4K+1FZKGbTjNML5fexmpmat6kZqqaVkRJHRDuTMHB1ET2ql/EBkkWTL2XGZbTeLZlBsouaqNzq1teNF0Ak4pe9jlTq0tnawRuRRP/pRW4rp0VqcRZWzmyE61dCi79WTEfaooDq1uX4HbWcqpnfKh3gAbdScOFsd2g1g+e6YrhpLelJLxZoD7ZsUpSHg/FxUrQFVcbs0UwyNWqpWTk6uh+N6fTxsuPrXOIfm7pTKTnkqTfuWq3+0PYNWamehFHz2c/xR6jqdS3PVMqv/UaiprYNHgoXZXOFm/pTJh1KqGjlpU+Wd1jVYqYkJmrf8y1KqmuGbSkdlUnmTuahfnkrkFh/86R2LlL4b+g6UYpeN2lX0c7hDn5VejTmcIq3kctYD+QsFm88j9dNBKjfuN+f1bqERdfoe5LruA0163UTEsOdYxsY90uypk/SMPp33T5+3AXQ6RCcJgVdrkjibyzkRbRhhqCsZbT1KRTTKRu0o99VkntpSnclX++QuVU7gOAepsyReD9VDktHAqTG67HMDdfjF2WILvhWkmum1A2RHPO7IxGQH3wYjdWvAgcm67NTO+lCTk/nW3MNJzc166O9LhWQydJVUGJbjFoKUSN1awF0GanvjdKcZO5taqvCNOOi0bUXiuAPussTSAI6SCpc40/YzupXDU7Q1T2xpbBimS3Xi5pO5NIoGXcMHL7aBEl1h1NvV7vLlXoDpOK+1Jih2gn5DhJXX3EN8Jw2+/1ZsIH5F3cq5bgA57LRvukqTI+Ll6RfHSnBPLPk5PQdU3hqJ2uvUIx2bssV/PGqiAUNTuwR1mh7roQWwEKBe/1kLhc8tmI3ZQkd5Gzx005w2dymfwpUGX1472aW3IzjAy8Z8G5xHGHm8ldXMUOPk5rIQ8/d6uq3IA/z08XnMkUcaNIb2pNZ+zqnWYhBkH6O0yOA19cm8RrlSbRh607k0afQeenhTa5QfFvLwTW6Hkq/MOdVvJfXz0B2F9JYZeu1Adq/5uj37UPtp3wxiJvIdstvH6yvUUncJHLsjNnzHmZshEoce3u+DntR+cqmySWjkYvMa/IhuT+B0V6nj8X/LeUv2hpGb1019qSneI+kvycHntRBXyN4twyBvJhfF8Ke27BUHtFfH2ZvaD0wtUxYBPN5Iyh0atpnyTCMEnsplbToZptSWIz+jpnRe6pKSXm47pbtNFGzKMO8gQ/OfXveQUjARj+QRepXop7B+1ELVbuamDE1ILbfS40pd2ctVk2uhuh1rxeMSjxI2qUUAkShZ3nMqqyKZ915FNhgpvQ20MaeaPyWL2+xevfL1nw0lVFtFTtRZB5knyyrPq+V2rk6AR6lq+jJydA8YYJwyxkIiFs5sdZiJXUl+k1dU1Nlmps/0m/wZ5a+QCT1iQZ9xNFcTIkVPv5IaKZz+5ghO6Ukt4S306HS+pYfDYbtZKGHN+ujJEu/2uEOjdvSOjvFZKgyTw+q+1B5/Usrv0tqfvqRT9qamt1HI9vGCmsu51ewwapBMnXNlj0YzRf1B7mJZvgu8QcptUbHDUjOvE9tbnDHC1B7f+TTOa4YWrNxW24akBhW+LSoViGZ21zY+Zk172DBY5LyNGp1Db7SdpdyAyHnIy/6+bcSg3Jduxs04w1IzrFF1giFAuzQy0OTWML/J4afamTcxDUfN9anw4wKo7+COoHwFcaPsNNUONGDzF+s3owKo0fjkjL3JFn13n62NJlN2mfL8yyqJ5IjgdsCqW3Bm/CV9/0gSE668k5uBO0284pWOG0K4bADjti+A/OwSZUNlm9fkh0dXh2Y0f9+i2kyoFpvUVGjropPu3sqPh+2qju5B5PdI7sU17RHVM7ut5g8DCKP1+eAmsE5XbVD+/Y75qk9ewyqv1usqYN+1nMi+SWVdBfUv+94GPEwOyQuFQqFQKBTqG/oX3WWVHHo/fScAAAAASUVORK5CYII="></img>
                                    </div>
                                    <div className="headerMidContent">
                                        <p>Optimization Services</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs="3" className="headerRight">
                            
                                <div className="logoutButton">
                                    <Link to="/">LOG OUT</Link>
                                </div>
                                <div className="headerIcons icons">
                                <div className="searchIcon icons"><FaSearch /></div>
                                <div className="bellIcon icons"><FaBell/></div>
                                <div className="envelopeIcon icons"><FaEnvelope/></div>
                                <div className="cogIcon icons"><FaCog/></div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            
            <DashBoardContent />
            
            </React.Fragment>
            
        );
    }
};

export default logout;