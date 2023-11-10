import React, { Fragment, useEffect , useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Button, Text, Menu, Avatar } from 'native-base'
import globalStyles from '../styles/global'
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FirebaseContext } from '../context/firebase/firebaseContex';
import { ScrollView } from 'react-native-gesture-handler';

function feed() {
  const { datos, obtenerdatos } = useContext(FirebaseContext)
  const navigation = useNavigation();
  useEffect(() => {
    obtenerdatos
  }, [])

  return (

    <NativeBaseProvider>

      <ScrollView>
        <View style={globalStyles.contenedor}>
          {datos.map((plato, i) => {
            const { imagen, nombre, descripcion, categoria, id } = plato;
            return (
              <Fragment key={id}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} my={5}>
                  <View mx={5}>
                    <Avatar size='70px' source={{uri:imagen}}></Avatar>
                  </View>
                  <View>
                    <Text>{nombre}</Text>
                    <Text>{descripcion}</Text>
                  </View>
                </View>
              </Fragment>
            )
          })}
          {/* <Button style={globalStyles.Button}
            block
            onPress={() => navigation.navigate('newTweet')}>
            <Text>Publicar Tweet de POllo </Text>
          </Button> */}
        </View>

      </ScrollView>
    </NativeBaseProvider>
  )
}

export default feed