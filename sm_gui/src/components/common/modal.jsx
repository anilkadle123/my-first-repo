import React, { Component } from "react";

class Modal extends Component {
  state = {};
  render() {
    console.log(this.props);
    if (this.props.show)
      return (
        <div className="">
          <h1>I am Modal</h1>
          <button
            type="button"
            className=""
            onClick={() => {
              this.props.onClose();
            }}
          >
            Close
          </button>

          <div className="">
            <div className="">
              <div className="">
                <div className="">Modal body..</div>
              </div>
            </div>
          </div>
        </div>
      );
    else return null;
  }
}

export default Modal;
