import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      typingIndicator: false,
      placeholder: 'Please type your message and press Enter (or Send button)'

    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ text: event.target.value, typingIndicator: true });
    console.log(this.state)
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.text === "") {
      // alert("Cannot send an empty message.\nPlease, type your message and press Enter (or Send button).")
      this.setState({placeholder: 'Cannot send an empty message' })
    } else {
      this.setState({ text: "" });
      this.props.onSendMessage(this.state.text);
      this.setState({placeholder: 'Please type your message and press Enter (or Send button)' })
    }
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={event => { this.onSubmit(event) }}>
          <input
            onChange={event => { this.onChange(event) }}
            value={this.state.text}
            type="text"
            placeholder={this.state.placeholder}
            autoFocus={true}
          />
          <Button variant="contained" color={"primary"} type="submit" endIcon={<Icon>send</Icon>}>
            {/* https://stackoverflow.com/questions/61938530/reactjs-material-ui-button-not-worked */}

            Send</Button>
        </form>

      </div>
    )
  }
}
