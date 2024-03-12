import { StatusBar, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const hands = {
    Rock: "✊",
    Paper: "🖐",
    Scissors: "✌️",
  };

  const choices = Object.keys(hands);

  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (playerChoice !== null && opponentChoice !== null) {
      determineWinner(playerChoice, opponentChoice);
    }
  }, [playerChoice, opponentChoice]);

  const generateOpponentChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setOpponentChoice(randomChoice);
  };

  const determineWinner = (player, opponent) => {
    if (player === opponent) {
      setResult("It's a tie!");
    } else if (
      (player === 'Rock' && opponent === 'Scissors') ||
      (player === 'Paper' && opponent === 'Rock') ||
      (player === 'Scissors' && opponent === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    generateOpponentChoice();
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/premium-vector/hand-rock-paper-scissor-gesture-symbol-jan-ken-pon-japan-traditional-game-cartoon-illustration_201904-1290.jpg' }}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ marginBottom: 40 }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black' }}>Rock, Paper, Scissors</Text>
      </View>

      <View style={{ marginBottom: 40 }}>
        <Text style={{ fontSize: 30, color: 'black' }}>Opponent: {hands[opponentChoice]}</Text>
      </View>

      <View style={{ marginBottom: 40 }}>
        <Text style={{ fontSize: 30, color: 'black' }}>X</Text>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 30, color: 'black' }}>You: {hands[playerChoice]}</Text>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          {choices.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{ backgroundColor: '#000000', padding: 8, borderRadius: 5, marginHorizontal: 5 }}
              onPress={() => handlePlayerChoice(item)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 25, marginRight: 5, color: 'white' }}>{item}</Text>
                <Text style={{ fontSize: 25, color: 'white' }}>{hands[item]}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>{result}</Text>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = {
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  rowX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  choiceButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  name: {
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
};
