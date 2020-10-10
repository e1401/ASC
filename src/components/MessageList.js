import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class MessageList extends Component {

    showMessage(message) {
      const {user, text} = message;
      const {currentUser} = this.props;
      const messageFromMe = user.id === currentUser.id;
      const className = messageFromMe ?
        "Messages-message currentUser" : "Messages-message";
      return (
        <li className={className} key={uuidv4()}>
          <span
            className="avatar"
            style={{backgroundImage: user.clientData.gradient}}
          />
          <div className=".Message__content">
            <div className="username">

              {user.clientData.username}
            </div>
            <div style={{backgroundImage: user.clientData.gradient}} className="text">{text}</div>
          </div>
        </li>
      );

  }

  render() {
    const {messages} = this.props;
    return (
      <div>


        <ul className="MessageList">
          {messages.map((singleMessage) => this.showMessage(singleMessage))}
        </ul>
      </div>
    )
  }
}


