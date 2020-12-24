import { Alert } from 'react-native'

const server = 'http://10.0.2.2:3000'

function showError(err) {
  Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
  Alert.alert('Sucesso!', `Mensagem: ${msg}`)
}

export { server, showError, showSuccess }