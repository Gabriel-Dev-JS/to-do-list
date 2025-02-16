import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

interface swipeProps {
  children: React.ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}

const SwipeableCard = ({ children, onEdit, onDelete }: swipeProps) => {
  const [offsetX, setOffsetX] = useState(new Animated.Value(0));

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: offsetX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }:any) => {
    if (nativeEvent.state === 5) {
      let newOffsetX = nativeEvent.translationX;
      if (newOffsetX < -width / 2) {
        newOffsetX = -width / 2;
      }

      if (newOffsetX < -150) { 
        Animated.spring(offsetX, {
          toValue: -width / 2, 
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(offsetX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <View style={styles.container}>
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

      <Animated.View
        style={[
          styles.actionsContainer,
          {
            opacity: offsetX.interpolate({
              inputRange: [-width / 2, 0],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <TouchableOpacity style={styles.button} onPress={onEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    position: 'relative',
  },
  card: {
    height: 58,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  actionsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10, 
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SwipeableCard;

