import { httpBatchLink } from "@trpc/client";
import { createTRPCProxyClient } from "@trpc/react";
import { AppRouter } from '../../backend/src/server';
import './App.css';
import ControllerDiagram from './assets/controller.png';

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({
    url: 'http://localhost:3600'
  })]
});

function App() {
  client.userById.query(24).then(console.log);

  return (
    <div className='App-header'>
      <div style={{ backgroundColor: 'beige', padding: 10, borderRadius: 10 }}>
        <img useMap="#controller" src={ControllerDiagram} />
        <map id='controller' name='controller'>
        <area style={{ cursor: 'pointer' }} shape="rect" coords="119, 101, 144, 124" />
        <area style={{ cursor: 'pointer' }} shape="rect" coords="99, 121, 120, 147" href="#" title="new" alt="" target="" download="" />
        <area style={{ cursor: 'pointer' }} shape="rect" coords="142, 124, 162, 145" href="#" title="new" alt="" target="" download="" />
        <area style={{ cursor: 'pointer' }} shape="rect" coords="120, 147, 142, 168" href="#" title="new" alt="" target="" download="" />
        <area shape="rect" coords="284, 91, 316, 123" href="#" title="new" alt="" target="" download="" />
        <area shape="rect" coords="284, 35, 317, 69" href="#" title="new" alt="" target="" download="" />
        <area shape="rect" coords="254, 64, 284, 95" href="#" title="new" alt="" target="" download="" />
        <area shape="rect" coords="317, 64, 348, 94" href="#" title="new" alt="" target="" download="" />
        </map>
      </div>
    </div>
  );
}

export default App;
