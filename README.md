# React Chat

You will be creating a piece of full stack software: a chat application. 

You will be utilizing the full MERN stack to do so: M(ongoose/MongoDb), E(xpress), R(eact), and N(ode). 

The React Router library will also be useful here, as well as styling libraries such as MUI, React-Strap, or Emotion.

## Wireframe

This wireframe is meant to give you the basic necessary elements.

**You are welcome to use your own creativity to design this application.**

[React Chat Wireframe](https://www.figma.com/file/6aibA82lGfvPwBowRqFFCG/react-chat?node-id=0%3A1)


## Message Schema

Your message document in your database should resemble the following:

```json
{
  "when": "2018-07-15T20:00:47.696Z",
  "author": "Meara",
  "room": "Main",
  "body": "I really want to attend NASA's DEVELOP program this summer!"
}
```

_For your schema, consider what data type each value should be._

# Stories

## Send And Receive

**Given** an empty chat room

**When** a user types their name into the `username` field

**And** types a message into the `message` field

**And** clicks the "Send" button

**Then** the message appears in the chat room with their username

**And** is written to your Mongo DataBase


## Poll for new messages every 10 seconds

**Given** a new message is sent

**Then** the client will see it in less than 10 seconds (without clicking Refresh)

### Hint:

* Use [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) or [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout).

## Rooms

In addition to the main room, create at least three different rooms (look to our Discord if you need inspiration)

**Given** a specific room 

**When** a user is in that specific room

**And** submits a post

**Then** the message will appear in that specific room

**And** not in any other room

**And** The client should show a list of all available rooms, either in a popup menu or a scrolling list.

**Given** a user clicks on a link to another room

**Then** they should see all messages associated with that room in the database.

# Icebox

  * Set your ad image to change to a new ad after a predetermined amount of time.

  * Validation - when a message exceeds 500 characters in its body, it should be rejected, and not sent to the database. 
 
  * Rather than utilizing `localhost`, set up your database to connect to a MongoDb Atlas cluster. If you reach this icebox, you will **need** to utilize the dotenv library and a `.env` file to hide the password in your connection string. The `.gitignore` already ignores `.env` for you.
 
  * Show messages in real time, such as occurs in Discord or Zoom, rather than after a polled delay.
