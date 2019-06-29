<script src="http://192.168.43.64:8097" />;

import React, { PureComponent } from "react";
import { Image, View, StyleSheet, Alert } from "react-native";
import {
  Container,
  Button,
  Text,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Icon,
  Body,
  Right,
  Title,
  Grid,
  Row,
  Col
} from "native-base";
import TicButton from "./components/TicButton";

export default class App extends PureComponent {
  state = {
    playerOne: [], //circle
    playerTwo: [], //cross circle
    cardUsed: [], //item in which clicked
    WinMessage: "",
    activePlayer: "playerOne",
    isGameEnd: false,
    gameResetedTimes: 0
  };
  addcard = (number, player) => {
    if (this.state.cardUsed.includes(number)) {
      //allready clicked on that card
      //show popup
      Alert.alert("already tapped");
    } else {
      //all good
      //add that number in used number
      const usedNumber = this.state.cardUsed;
      usedNumber.push(number);
      this.setState({ cardUsed: usedNumber });

      //continue game

      if (this.state.WinMessage != "") {
        //game over
        return Alert.alert(this.state.WinMessage);
      } else {
        //game is conituning

        //we are getting here player and number
        //eg:- 0 playerOne
        if (player === "playerOne") {
          //if playerOne is the person who taps on the cards
          //pushing new number which he had tabed and then  changing the player
          const playerOneCards = this.state.playerOne;
          playerOneCards.push(number);
          this.checkWinner(playerOneCards);
          this.setState({
            playerOne: playerOneCards,
            activePlayer: "playerTwo"
          });
        } else {
          //player two is the person who tabs on the card
          const playerTwocards = this.state.playerTwo;
          playerTwocards.push(number);
          this.checkWinner(playerTwocards);

          this.setState({
            playerTwo: playerTwocards,
            activePlayer: "playerOne"
          });
        }
      }
    }

    //check all cards had been clicked or not
    if (this.state.cardUsed.length == 9) {
      //all cards had been clicked
      this.setState({
        isGameEnd: true,
        WinMessage: "Match Ended..."
      });
    }
  };

  resetGame = () => {
    this.setState({
      playerOne: [], //circle
      playerTwo: [], //cross circle
      cardUsed: [], //item in which clicked
      WinMessage: "",
      activePlayer: "playerOne",
      isGameEnd: false,
      gameResetedTimes: this.state.gameResetedTimes + 1
    });
  };

  checkWinner = data => {
    data.map(one => {
      switch (one) {
        case "0":
          if (data.includes("3") && data.includes("6")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("2") && data.includes("1")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("4") && data.includes("8")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          break;
        case "1":
          if (data.includes("0") && data.includes("2")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("4") && data.includes("7")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          break;
        case "2":
          if (data.includes("0") && data.includes("1")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("5") && data.includes("8")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("4") && data.includes("6")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          break;
        case "3":
          if (data.includes("0") && data.includes("6")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("4") && data.includes("5")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          break;
        case "4":
          if (data.includes("1") && data.includes("7")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("3") && data.includes("5")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("0") && data.includes("8")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("6") && data.includes("2")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }

          break;
        case "5":
          if (data.includes("4") && data.includes("3")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("2") && data.includes("8")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }

          break;
        case "6":
          if (data.includes("0") && data.includes("3")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("7") && data.includes("8")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("4") && data.includes("2")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          break;
        case "7":
          if (data.includes("6") && data.includes("8")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("1") && data.includes("4")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          break;
        case "8":
          if (data.includes("5") && data.includes("2")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("7") && data.includes("6")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }
          if (data.includes("4") && data.includes("0")) {
            this.setState({
              WinMessage: `${this.state.activePlayer} Won`,
              isGameEnd: true
            });
          }

          break;
      }
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Tic Tac Toe</Title>
          </Body>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Grid
            styles={{
              flex: 1,
              width: "100%"
            }}
          >
            <Row
              style={{
                flex: 1,
                width: "100%",
                marginTop: 50
              }}
            >
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="0"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="1"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="2"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
            </Row>
            <Row
              style={{
                flex: 1,
                width: "100%"
              }}
            >
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="3"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="4"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="5"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
            </Row>
            <Row
              style={{
                flex: 1,
                width: "100%"
              }}
            >
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="6"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="7"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
              <Col>
                <TicButton
                  addcard={this.addcard}
                  player={this.state.activePlayer}
                  number="8"
                  key={this.state.gameResetedTimes}
                  isGameEnd={this.state.isGameEnd}
                />
              </Col>
            </Row>
            {this.state.isGameEnd ? (
              <React.Fragment />
            ) : (
              <Row
                style={{
                  flex: 0,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 23
                  }}
                >
                  {this.state.activePlayer} chance
                </Text>
              </Row>
            )}
            <Row
              style={{
                flex: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 23
                }}
              >
                {this.state.WinMessage}
              </Text>
            </Row>
            {this.state.isGameEnd ? (
              <Row
                style={{
                  flex: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 20
                }}
              >
                <Button
                  primary
                  onPress={() => {
                    this.resetGame();
                  }}
                >
                  <Text>Reset</Text>
                </Button>
              </Row>
            ) : (
              <React.Fragment />
            )}
          </Grid>
        </Content>
      </Container>
    );
  }
}
