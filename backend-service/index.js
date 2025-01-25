const { Expo } = require('expo-server-sdk')

let expo = new Expo({})

let messages = []

messages.push({
  to: 'ExponentPushToken[aUPHskD99rUyC4enl1ERSb]',
  sound: 'default',
  body: 'Body of the notification',
  data: { someData: 'goes here' },
})

let chunks = expo.chunkPushNotifications(messages)
let tickets = []

;(async () => {
  for (let chunk of chunks) {
    try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk)
      console.log(ticketChunk)
      tickets.push(...ticketChunk)
    } catch (error) {
      console.error(error)
    }
  }
})()
