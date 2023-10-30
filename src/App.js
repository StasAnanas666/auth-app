import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./App.css";
import {firebaseConfig} from "./firebaseConfig";
import Auth from "./Auth";

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
