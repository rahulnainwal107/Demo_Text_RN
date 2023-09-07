import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1}}>
        <Text numberOfLines={1} style={{fontSize: 32, fontWeight: 'bold'}}>
          Intent act=android.intent.action.MAIN
          cat=[android.intent.category.LAUNCHER] cmp=com.demo_text/.MainActivity{' '}
        </Text>
        <Text>Hello</Text>
      </View>
      <View style={{width: 100, backgroundColor: 'red'}}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default App;
