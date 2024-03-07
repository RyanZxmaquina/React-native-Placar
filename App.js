import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MiniGame = () => {
  const [score1, setScore1] = useState(0); // Estado para o placar 1
  const [score2, setScore2] = useState(0); // Estado para o placar 2

  // Função para reiniciar os placares
  const resetScores = () => {
    setScore1(0);
    setScore2(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Placar 1: {score1}</Text>
      <Text style={styles.score}>Placar 2: {score2}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Placar 1" onPress={() => setScore1(score1 + 1)} />
        <Button title="Placar 2" onPress={() => setScore2(score2 + 1)} />
      </View>
      <Button title="Reiniciar" onPress={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});

export default MiniGame;
