import * as Notifications from 'expo-notifications'

import { Button, StyleSheet, Text, View } from 'react-native'
import {
  configNotificationHandler,
  registerForPushNotificationsAsync,
} from './notifications-utils'

import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'

configNotificationHandler()

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync().then(console.log)
  }, [])

  async function handleNotification() {
    const { status } = await Notifications.getPermissionsAsync()
    if (status !== 'granted') {
      alert('Sem permissão para notificações')
      return
    }
    let token = (
      await Notifications.getExpoPushTokenAsync({
        projectId:
          Constants?.expoConfig?.extra?.eas?.projectId ??
          Constants?.easConfig?.projectId,
      })
    ).data

    console.log(token)
  }

  return (
    <View style={styles.container}>
      <Text>Sistema de notificações</Text>

      <Button title="Notificar" onPress={handleNotification} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
