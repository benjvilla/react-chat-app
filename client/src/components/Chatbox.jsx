//import hooks from react
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import css
import "../styles/App.css";

//component function
export default function Chatbox() {
  //use state to hold result of fetch
  const [allMessages, setAllMessages] = useState([]);

  //create a function to set the current path to the currentRoom ID
  let { currentR } = useParams();
  function CurrentRoom() {
    console.log(currentR);
    return (
      <div>
        <h2>Current Room: {currentR} </h2>
      </div>
    );
  }


  function fetcher() {
    fetch(`http://localhost:5000/${currentR}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllMessages(json);
      });
  }
  //fetch information from a local API route set up on the server
  useEffect(() => {
    fetcher();
  }, [currentR]);

  return (
    <div id="messages">
        <CurrentRoom />
      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allMessages.map((message) => {
            return (
              <tr key={message._id}>
                <td id="username">{message.userName}</td>
                <td id="message">{message.userMessage}</td>
                <td id="date">{message.date}</td>
                <td id="delete">
                  {" "}
                  <form
                    action={`http://localhost:5000/delete/${message._id}`}
                    method="POST"
                  >
                    <button id="myButton">Darksign this message</button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
            </td>
          </tr>
        </tfoot>
      </table>
      <div>
        <form id="input" action="http://localhost:5000/create" method="POST">
          <input
            type="text"
            name="userName"
            placeholder="State your name, Undead"
          />
          <input
            type="text"
            name="userMessage"
            placeholder="Leave your sign here"
          />
          <input type="submit" value="Send Message" />
          <input type="hidden" name="currentRoom" value={currentR} />
        </form>
        <button id="refresh" onClick={fetcher}>
          Refresh
        </button>
      </div>
    </div>
  );
}
