import { useState } from 'react';
import './App.css';
import Navbar from './compontes/Navbar';
import TextForm from './compontes/TextForm';
//import About from './compontes/About';
//import Alert from './compontes/Alert';

/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState("light");

  //  const [alert, setAlert]=useState(null);

  const handelModes = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("success fully enable the dark mode", "success");

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success fully enable the light mode", "primary");
    }
  }

  const showAlert = (message, type) => {
    /*setAlert({
      message: message,
      type: type
    });*/
  }

  return (
    <>
{/*<Router>*/}
      <Navbar title="Texttutils" aboutText="about us" mode={mode} handelModes={handelModes} />
      {/*<Alert alert={alert}/>*/}
      <div className="container my-3">
        {/*<Routes>*/}    
             {/* <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter the text" mode={mode} />}>*/}
          {/*</Route>*/}   
          {/*</Routes>*/}

          <TextForm heading="Enter the text" mode={mode} />
      </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
