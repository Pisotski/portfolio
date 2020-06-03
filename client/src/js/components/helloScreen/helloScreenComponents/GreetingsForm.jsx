import React from 'react';
import { connect } from 'react-redux';
import { addGuestInfo } from '../../../../../redux/actions/guestInformation.action';

import '../../../../css/helloPage/GreetingsForm.css';

class GreetingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      guestClass: 'guest-name',
    };
    this.guestName = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;
    this.setState({
      guestClass: 'guest-name-active',
    });
    dispatch(addGuestInfo(this.guestName.current.value));
    this.guestName.current.value = '';
  }

  handleChange(e) {
    const newName = ` ${e.target.value}`;
    this.setState({
      userName: newName,
    });
  }

  render() {
    const { userName, guestClass } = this.state;
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Hello dear
          <span className={guestClass}>
            {userName}
          </span>
          , and welcome.
        </label>
        <input type="text" id="name" placeholder="username" ref={this.guestName} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect()(GreetingsForm);
