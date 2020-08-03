import React from 'react';
import { View, Text, Button } from 'react-native';
import { routesName } from '../../router';

export default function DetailsScreen(props) {
  const { route, navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params?.item?.title}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push(routesName.Details)}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(routesName.Home)}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
