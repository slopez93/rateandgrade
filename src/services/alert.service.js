import { Alert } from 'react-native';

let instance = null;

export default class AlertService {

  static get instance() {
    if (instance === null) {
      instance = new AlertService();
    }

    return instance;
  }

  showAlert(title, content, callback = null, showCancel = false) {
    let options = [
      {
        text: 'Aceptar',
        onPress: () => {
          if (callback === null) return;
          callback();
        }
      }
    ];
    if (showCancel) {
      options.push({text: 'Cancelar'});
    }
    Alert.alert(
      title,
      content,
      options,
      { cancelable: true });
  }

}
