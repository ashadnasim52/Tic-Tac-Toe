import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Card, Body, CardItem, Icon } from "native-base";
export default class TicButton extends PureComponent {
  state = {
    icon: "question-circle",
    lock: false
  };
  render() {
    const { player, number } = this.props;

    return (
      <TouchableOpacity
        style={styles.outerContainer}
        onPress={() => {
          if (this.state.lock) {
            //tapped alerady
            Alert.alert("Already tapped");
          } else {
            this.props.addcard(number, player);
            this.setState({ lock: true });
            if (player === "playerOne") {
              this.setState({ icon: "circle" });
            } else {
              this.setState({ icon: "times" });
            }
          }
        }}
      >
        <Card>
          <CardItem>
            <Body style={styles.innerContainer}>
              <Text>
                <Icon
                  style={styles.ticIcon}
                  type="FontAwesome5"
                  name={this.state.icon}
                />
              </Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 5
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70
  },
  ticIcon: {
    fontSize: 52,
    color: "red"
  }
});
