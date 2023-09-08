import './App.css';
import {useEffect} from "react";
const tg=window.Telegram.WebApp;

function App(){
    const ffg = 12;
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
        <span className={"Id"}>
            {tg.initDataUnsafe.user.last_name}
        </span>
        {ffg}
        <span className={"Id"}>
            {tg.initDataUnsafe.user.username}
        </span>

    </div>
  );
}

export default App;
