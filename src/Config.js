  import firebase from 'firebase';
  
  //makes firebase work with this app
  var config = {
    apiKey: "AIzaSyBsOWPhYLru1Tx_nzd1yvp0Zmwye1XeXlg",
    authDomain: "brewmap-d8faf.firebaseapp.com",
    databaseURL: "https://brewmap-d8faf.firebaseio.com",
    projectId: "brewmap-d8faf",
    storageBucket: "brewmap-d8faf.appspot.com",
    messagingSenderId: "331237989368"
  };
  firebase.initializeApp(config);
  
export default firebase;  
  
  



