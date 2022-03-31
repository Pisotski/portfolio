import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../../css/mainPage/HelloScreenWrapper.css';

const HelloScreenWrapper = (props) => {

  const test = useSelector(state => state.test)
  console.log(test)
  return (
    <div className="hello-screen-wrapper">
      {/* [LEFT SIDE] NON INTERACTIVE */}
      <div className="hero-wrapper">
        <div>CANVAS</div>
        <div className="hero-photo">
          <Link to="/home">hi</Link>
        </div>
      </div>
      {/* [OWNER] END */}

      {/* <div className="form-wrapper">FORM</div> */}
      {/* RIGHT SIDE OF WELCOME PAGE. GUEST SIDE */}
      <form className="guest-wrapper">
        <label>TEST
          <input type="text" placeholder="test" />
        </label>
        <input type="submit" value="Come in" />
      </form>
      {/* {[LEFT SIDE] END} */}
    </div>
  );
}

export default HelloScreenWrapper;
