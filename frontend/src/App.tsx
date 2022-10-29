// import { httpBatchLink } from "@trpc/client";
// import { createTRPCProxyClient } from "@trpc/react";
// import { AppRouter } from '../../backend/src/server';
import { useState } from 'react';
import './App.css';
import ControllerDiagram from './assets/controller.png';
import StickPositionMap from './components/stick-position-map';

// const client = createTRPCProxyClient<AppRouter>({
//   links: [httpBatchLink({
//     url: 'http://localhost:3600'
//   })]
// });

function App() {
  // client.userById.query(24).then(console.log);
  const [isLeftStickDisplayed, setIsLeftStickDisplayed] = useState(false);

  return (
    <div className='App-header'>
      <div style={{ backgroundColor: 'beige', padding: 10, borderRadius: 10, position: 'relative' }}>
        {isLeftStickDisplayed && (
          <div style={{ position: 'absolute', left: -180, top: -40, width: 80, wordWrap: 'break-word' }}>
            <StickPositionMap onJoystickMove={() => {}} xPosition={0} yPosition={0} onPress={() => {}} onSubmit={() => {}} />
          </div>
        )}
        <img useMap="#controller" src={ControllerDiagram} alt="Nintendo Switch Pro Controller Diagram" />
        <map id='controller' name='controller'>
          <area style={{ cursor: 'pointer' }} shape="rect" coords="119, 101, 144, 124" title="Up D-Pad" alt="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="99, 121, 120, 147" href="#" title="Left D-Pad" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="142, 124, 162, 145" href="#" title="Right D-Pad" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="120, 147, 142, 168" href="#" title="Down D-Pad" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="284, 91, 316, 123" href="#" title="B Button" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="284, 35, 317, 69" href="#" title="X Button" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="254, 64, 284, 95" href="#" title="Y Button" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="317, 64, 348, 94" href="#" title="A Button" alt="" target="" download="" />
          <area onClick={() => {
            setIsLeftStickDisplayed(!isLeftStickDisplayed);
          }} style={{ cursor: 'pointer' }} shape="rect" coords="51, 49, 108, 103" href="#" title="Left Stick (Click to expand)" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="218, 102, 274, 161" href="#" title="Right Stick (Click to expand)" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="134, 35, 157, 63" href="#" title="- Button" alt="" target="" download="" />
          <area style={{ cursor: 'pointer' }} shape="rect" coords="235, 36, 257, 60" href="#" title="+ Button" alt="" target="" download="" />
        </map>
      </div>
    </div>
  );
}

export default App;
