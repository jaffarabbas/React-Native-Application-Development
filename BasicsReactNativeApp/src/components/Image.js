import React from 'react';
import { Image, View } from 'react-native';

export default function ImageComponent(props) {
  return (
    <View>
      <Image source={props.source} style={props.style} />
    </View>
  );
}
