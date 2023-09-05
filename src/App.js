import './App.css';
import {useEffect} from "react";
const tg=window.Telegram.WebApp;

function App(){
    useEffect(() => {
        tg.ready();
    }, [])
    const Onclose   = ()=> {
        tg.close()
    }
  return (
    <div className="App">
      workm
        <button onClick={onclose}>Закрыть</button>
    </div>
  );
}

export default App;
