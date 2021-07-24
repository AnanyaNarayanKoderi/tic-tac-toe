import React, { useState } from "react";
import Icon from "./components/Icons";


//to include the toastify contents
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import reactstrap

import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'


//to use css
import "./styles.css"   //place at last to dominate

const tiktacArray = new Array(9).fill("") //array of 9 elements by default filled with null

const App = () => {
    let [isCross, setIsCross] = useState(true)  //initially cross is set
    let [winMessage, setWinMessage] = useState("")

    const playAgain = () => {   //when user press play or reset button,game will start from beginning
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }


//possible conditions at which players might win

    const findWinner = () => {
        
        
        if (tiktacArray[0] !== "" && tiktacArray[0] === tiktacArray[1] && tiktacArray[1] === tiktacArray[2]) {
            setWinMessage(tiktacArray[0] + " has won!!")
        }
        else if (tiktacArray[3] !== "" && tiktacArray[3] === tiktacArray[4] && tiktacArray[3] === tiktacArray[5]) {
            setWinMessage(tiktacArray[3] + " has won!!")
        }
        else if (tiktacArray[6] !== "" && tiktacArray[6] === tiktacArray[7] && tiktacArray[7] === tiktacArray[8]) {
            setWinMessage(tiktacArray[6] + " has won!!")
        }
        else if (tiktacArray[0] !== "" && tiktacArray[3] === tiktacArray[0] && tiktacArray[0] === tiktacArray[6]) {
            setWinMessage(tiktacArray[0] + " has won!!")
        }
        else if (tiktacArray[1] !== "" && tiktacArray[1] === tiktacArray[4] && tiktacArray[4] === tiktacArray[7]) {
            setWinMessage(tiktacArray[1] + " has won!!")
        }
        else if (tiktacArray[2] !== "" && tiktacArray[2] === tiktacArray[5] && tiktacArray[5] === tiktacArray[8]) {
            setWinMessage(tiktacArray[2] + " has won!!")
        }
        else if (tiktacArray[0] !== "" && tiktacArray[0] === tiktacArray[4] && tiktacArray[4] === tiktacArray[8]) {
            setWinMessage(tiktacArray[0] + " has won!!")
        }
        else if (tiktacArray[2] !== "" && tiktacArray[2] === tiktacArray[4] && tiktacArray[4] === tiktacArray[6]) {
            setWinMessage(tiktacArray[2] + " has won!!")
        }
        

    }

    const changeItem = (index) => {
        if (winMessage) {   //toast message gets displayed when the player continues playing even after winning
            return toast("Game has already got over", { type: "success" })
        }
        if (tiktacArray[index] == "") {  //onclick it shows circle or cross mark accordingly
            tiktacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
            
        }
        else {  //if player  clicks on the same card which is alreay clicked,this toast message is displayed
        
          
            return toast("You have already filled this place!!", { type: "error" })
        }
        findWinner()  
    }

    return (
        <Container className="p-5">  {/* padding 5*/}
            <ToastContainer position="bottom-center" > </ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3">
                    {
                        //to display the winner
                        winMessage ? (
                            <div>

                                <h1>
                                    {winMessage}

                                    <Button style={{ background: "#0F044C" }} onClick={playAgain}>Play</Button>
                                </h1>
                            </div>
                        )
                            :
                            (
                                <div>
                                    <h1>

                                        {isCross ? "Cross's Turn" : "Circle's Turn"}

                                        <Button style={{ background: "#0F044C" }} onClick={playAgain}>Reset</Button>
                                    </h1>
                                </div>
                            )
                    }
                    <div className="grid">
                        {tiktacArray.map((value, index) => (
                            <Card onClick={() => { changeItem(index) }}>
                                <CardBody className="box">
                                    <Icon choice={tiktacArray[index]} />
                                </CardBody>
                            </Card>
                        ))}

                    </div>
                </Col> {/*medium scale */}
            </Row>

        </Container>

    )
}

export default App;