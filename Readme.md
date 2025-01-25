# Sistema de Push notification para uso no expo

## Requerimentos

Para gerar o ID para o canal de push notification

- Faca o login na sua conta da expo.dev
  ```bash
  eas login
  ```
- Inicie o projeto no eas
  ```bash
  eas init
  ```
- Gere a configuração de build
  ```bash
  eas build:configure
  ```

## Dependências

### Mobile

```bash
npx expo install expo-notification
```

### Api

```bash
yarn add expo-server-sdk
```

## Docs

- [expo-server-sdk](https://github.com/expo/expo-server-sdk-node)
- [expo-notification](https://docs.expo.dev/versions/latest/sdk/notifications/)

## Implementação

### [notifications-utils](./notifications-utils.ts)

Contém a parte de configuração, permissão e geração de token para o servico

Exemplo:

```js
import {configNotificationHandler, registerForPushNotificationsAsync} from './notifications-utils.ts'

configNotificationHandler()

  function App() {
   useEffect({
     registerForPushNotificationsAsync().then(console.log)
   }, [])
   /.../
  }

```

### [backend-service](./backend-service/index.js)

Contém uma simples demonstração de aplicação do serviço
