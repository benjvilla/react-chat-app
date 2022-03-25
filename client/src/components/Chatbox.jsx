//import hooks from react
import { useState, useEffect } from "react";

//component function
export default function Chatbox(props) {
  //use state to hold result of fetch
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    //fetch information from a local API route set up on the server
    fetch("http://localhost:5000/allmessages")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllMessages(json);
      });
  }, []);


        return (
            <div id="messages">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allMessages.map((message) => {
                            return (
                                <tr key={message._id}>
                                    <td>{message.userName}</td>
                                    <td>{message.date}</td>
                                    <td>{message.userMessage}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <form action="/create" method="POST">
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
