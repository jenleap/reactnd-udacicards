import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { makeArray } from './../utils/api';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class QuizView extends React.Component {
    state = {
        viewQuestion: true,
        questions: [],
        count: 0,
        correct: 0
    }

    componentWillMount() {
        this.setQuestions();
    }

    setQuestions = () => {
        let questions = makeArray(this.props.deck.questions);
        this.setState({questions});
    }

    calculateCorrect = () => {
        return parseInt((this.state.correct / this.state.questions.length)*100);
    }

    onAnswer = () => {
        this.setState({viewQuestion: false});
    }

    onQuestion = () => {
        this.setState({ viewQuestion: true});
    }

    onNext = () => {
        this.setState({ count: this.state.count + 1});
        this.setState({viewQuestion: true});
        clearLocalNotification()
            .then(setLocalNotification);
    }

    onCorrect = () => {
        this.setState({ correct: this.state.correct + 1});
        this.onNext();
    }

    onReset = () => {
        this.setQuestions();
        this.setState({viewQuestion: true});
        this.setState({count: 0});
        this.setState({correct: 0});
    }

    onBack = () => {
        this.props.navigation.navigate('deck');
    }

  render() {
    return (
      <View style={styles.container}>
        
        {this.state.questions.length !== this.state.count ? (
            <View >
            <Text>{this.state.count + 1} / {this.state.questions.length}</Text>
                {this.state.viewQuestion ? (
                    <View>
                        <Text style={{ fontSize: 25}}>{this.state.questions[this.state.count].question}</Text>
                            <TouchableOpacity onPress={this.onAnswer}>
                                <Text style={{ color: "red", fontWeight: "bold"}}>Answer</Text>
                            </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <Text style={{ fontSize: 25}}>{this.state.questions[this.state.count].answer}</Text>
                        <TouchableOpacity onPress={this.onQuestion}>
                            <Text style={{ color: "red", fontWeight: "bold"}}>Question</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: "green"}]}
                    onPress={this.onCorrect}>
                    <Text style={{ color: "white" }}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: "red"}]}
                    onPress={this.onNext}>
                    <Text style={{ color: "white" }}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        ) : (
            <View>
                <Text>You have answered {this.calculateCorrect()}% correctly.</Text>
                <TouchableOpacity 
                    style={styles.resetButton}
                    onPress={this.onReset}>
                    <Text>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={this.onBack}>
                    <Text style={{ color: "white" }}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    button: {
        margin: 10,
        padding: 10,
        borderRadius: 4,
    },
    resetButton: {
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 4
    },
    backButton: {
      margin: 10,
      padding: 10,
      backgroundColor: "black",
      borderRadius: 4,
    }
});

const mapStateToProps = (state) => {
  return {
    deck: state.selectedDeck
  };
};

export default connect(mapStateToProps) (QuizView);