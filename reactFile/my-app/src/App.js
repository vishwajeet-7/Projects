
import './App.css';
/*
return React.createElement(
    "div",
    {
      className: "container",
      style: {
        padding: "1rem",
        display: "flex",
        gap: "1rem"
      }
    },
    [
      React.createElement(
        "div",
        {},
        React.createElement("img", {
          src: "https://i.imgflip.com/2gytch.jpg",
          width: "360px"
        })
      ),
      React.createElement("div", {}, [
        React.createElement("h1", {}, "React is the best!")
      ])
    ]
  );
}
*/

function App() {
  return (
    <div className="container">
      <div>
        <img src="https://i.imgflip.com/2gytch.jpg" 
        style={{
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          width: "300px"
        }}
        />
      </div>
      <div>
        <h1>React is the Best</h1>
      </div>
    </div>
  );
}

export default App;
