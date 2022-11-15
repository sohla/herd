import { Helmet } from 'react-helmet';
import './App.css';
import { useCountdown, useTime, HOURS } from "react-time-sync";
const cd = Date.now() + 4000

function App() {
  
  const currentTime = useTime()
  const secsDay = currentTime % 86400

  const hours = Math.floor(secsDay / 3600) - 1
  const minutes = Math.floor( (currentTime%3600) / 60)
  const seconds = (currentTime%3600) % 60

  const MyCountDown = (props: { until: number }) => {
    const until =(props.until)
    const timeLeft = useCountdown({ until })
    return <div>{timeLeft > 0 ? `${timeLeft} seconds left` : "Done!"}</div>
  };

  return (

    <div className="bg-neutral-800 h-screen">

      <Helmet>    
        <meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>

      <div className='flex flex-col h-screen justify-center w-full text-center text-white'>
        <div className=' text-7xl ' >he.rd</div>
        <div>Seconds : {currentTime}</div>
        <div>Time in the day : {hours}:{minutes}:{seconds}</div>
        <MyCountDown until={cd}/>
      </div>
    </div>
  );
}

export default App;
