import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Button, Text } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base';

const newTweet = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Button style={globalStyles.Button}
          onPress={() => navigation.navigate('feed')}>
          <Text>Publicar Tweet</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  )
}

export default newTweet