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
        <span className={'first_name'}>
            {tg.initDataUnsafe.user.first_name}
        </span>

    </div>
  );
}

export default App;
