import logo from './logo.svg';
import './App.css';
import Dropdown from './Components/Dropdown';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [open,setOpen] = useState(false)
  const details = [
    {
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ,
      text: "Facebook"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ,
      text: "Facebook"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ,
      text: "Facebook"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ,
      text: "Facebook"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" ,
      text: "Facebook"
    },
  ]
  const menuRef = useRef();
  useEffect(()=>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }
    }
    document.addEventListener("mousedown",handler);

    // return()=>{
    //   document.removeEventListener("mousedown",handler)
    // }
  })
  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' 
        onClick={()=>setOpen(!open)}
        >
          <img src="https://avatars.githubusercontent.com/u/117368694?v=4" alt="" />
        </div>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <h3>The Kiet <br/><span>Website Designer</span></h3>
          <ul>
            {
              details.map((ele,idx)=>{
                return <Dropdown img={ele.img} text={ele.text} key={idx}/>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
