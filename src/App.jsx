import { useState } from 'react'
import './App.css'
import Welcome from './Welcome';
import Input from './Input';
import { Items } from './store/liststore';
function App() {
  const [list, setlist] = useState([]);
  function handle(arr) {
      if(arr.name===""){
        alert("wrong")
      }
      else{

        console.log(arr);
        
        const newlist = [...list, arr];
        setlist(newlist);
      }
    }
    function del(ind) {
      const newlist = list.filter((_, index) => {
        return index != ind;
      })
      setlist(newlist);
    }

  return (
    <>

      <center>
        <div className="total">
          <div><h1>Work Schedule</h1></div>
          <div className='.input'>
            <Input handle={handle}></Input>
          </div>

          {
            list.map((x, index) => (
              <div>

                <div className='li-cont'>
                  <li className='liitem'>{x.name}</li>
                  <li className='liitem'>{x.date}</li>
                  <button className='liitem del' onClick={() => del(index)}>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
        <Welcome item={list}></Welcome>
      </center>
    </>
  )
}

export default App
