import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
function App() {
  const server = "http://localhost:2020/";

  const socket = io(server);

  useEffect(() => {
    socket.on("connection", () => {
      console.log("Connected to Server Successfully");
    });
  }, []);
  console.log("S oooooo", socket);
  return (
    <div className="App">
      <h1>
        Hello, I am building a WebSocket Application with React.js and Express{" "}
      </h1>

      <div>
        <h2>
          Current Price: &nbsp; <span>50000</span>
        </h2>
      </div>
    </div>
  );
}

export default App;
