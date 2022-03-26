//import hooks from react
import { useState, useEffect } from "react";

//import css
import "../styles/App.css"

//component function
export default function Chatbox() {
  //use state to hold result of fetch
  const [allMessages, setAllMessages] = useState([]);

  useEffect(async () => {
    //fetch information from a local API route set up on the server
    fetch("http://localhost:5000/allmessages")
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        setAllMessages(json);
    })
  }, []);


        return (
            <div id="messages">
                <table>
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
                                        <form action={`http://localhost:5000/delete/${message._id}`} method="POST">
                                            <button>Darksign last message</button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <form action="http://localhost:5000/create" method="POST">
                                    <input 
                                        type="text"
                                        name="userName"
                                        placeholder="State your name, Chosen Undead"
                                    />
                                    <input 
                                        type="text"
                                        name="userMessage"
                                        placeholder="Leave your sign here"
                                    />
                                    <input type="submit" value="Send Message" />
                                </form>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );

}
