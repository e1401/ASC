import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import Navbar from './components/Navbar'
import RandomUserName from './components/RandomUsername';
import RandomGradient from './components/RandomGradient';
import './App.css'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      user: {
        username: RandomUserName(),
        gradient: RandomGradient()
      }

    }

    this.drone = new window.Scaledrone("aRS4wQEtECAORddN", {
      data: this.state.user
    });

    this.onSendMessage = this.onSendMessage.bind(this)
  }

  componentDidMount() {
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const user = {...this.state.user};
      user.id = this.drone.clientId;
      this.setState({user});
    });

    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, user) => {
      const messages = this.state.messages;
      messages.push({user, text: data});
      this.setState({messages});
    });

  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
          <MessageList
        messages={this.state.messages}
        currentUser={this.state.user}
      />
      <MessageInput
      onSendMessage={this.onSendMessage}
      />
      </div>
    )
  }


}
