import { useState } from 'react'; 
import axios from 'axios'; 
 
function App() { 
 
  const [agents, setAgents] = useState([]); 
  const [agent, setAgent] = useState(null); 
 
  if (agents.length === 0) { 
    axios.get("https://valorant-api.com/v1/agents") 
      .then(res => { 
        setAgents(res.data.data); 
      }) 
  } 
 
  function mudaAgent(agentName) { 
    agents.forEach(item => { 
      if (agentName === item.displayName) { 
        setAgent(item); 
      } 
    }); 
  } 
 
  return ( 
    <> 
      <div className='container-xl'> 
        <div className='row m-5'> 
          { 
            agents.map(agent => ( 
              <div key={agent.uuid} className='col-12 col-md-4 mb-3'> 
                <button onClick={() => mudaAgent(agent.displayName)} className='btn btn-danger w-100'> 
                  {agent.displayName} 
                </button> 
              </div> 
            )) 
          } 
        </div> 
      </div> 
      { 
        agent && ( 
          <> 
            <div className='row m-5 mb-0'> 
              <div className='col text-center'> 
                <h2>Habilidades|Granada|Ultimate</h2> 
              </div> 
            </div> 
            <div className='m-5 mt-0 row justify-content-center'> 
              <div className='col-12 col-md-6'> 
                <ul className='list-unstyled text-center'> 
                  { 
                    agent.abilities.map(item => ( 
                      <li key={item.slot}>{item.displayName}</li> 
                    )) 
                  } 
                </ul> 
              </div> 
            </div> 
          </> 
        ) 
      } 
    </> 
  ); 
} 
 
export default App;