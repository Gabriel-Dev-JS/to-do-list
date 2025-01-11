
import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

interface swipeProps {
    children: React.ReactNode;
}

const SwipeableCard = ({children}:swipeProps) => {
  const [offsetX, setOffsetX] = useState(new Animated.Value(0));

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: offsetX } }],
    { useNativeDriver: false }
  );
  // @ts-ignore
  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === 5) {
      // Se o card for deslizamento total ou próximo
      if (nativeEvent.translationX > 150) {
        // Ação ao deslizar para a direita
        Animated.spring(offsetX, {
          toValue: width, // Desloca o card para fora da tela
          useNativeDriver: true,
        }).start();
      } else if (nativeEvent.translationX < -150) {
        // Ação ao deslizar para a esquerda
        Animated.spring(offsetX, {
          // toValue: -width, // Desloca o card para fora da tela
          toValue: -width, // Desloca o card para fora da tela
          useNativeDriver: true,
        }).start();
      } else {
        // Caso não tenha deslizado o suficiente, volta ao estado original
        Animated.spring(offsetX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateX: offsetX }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  card: {
    height:58,
    // width:300,
    width:'90%',
    // backgroundColor: '#4CAF50',
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default SwipeableCard;