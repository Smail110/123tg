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
        <span className={"Id"}>
            {tg.initDataUnsafe.user.id}
        </span>

    </div>
  );
}

export default App;
