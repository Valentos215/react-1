import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  statusText = () => {
    if (this.props.status) {
      return this.props.status;
    } else if (!this.props.id) return "Insert your status";
    else return "No status";
  };
  activateEditMode = () => {
    if (!this.props.id)
      this.setState({
        editMode: true,
      });
  };
  escapeKey = (e) => {
    if (e.key === "Escape") {
      this.setState({
        editMode: false,
      });
    }
  };
  deactivateEditMode = (e) => {
    if (e.target.value.length > 299) alert("Max status length is 300 symbols");
    else {
      this.setState({
        editMode: false,
      });
      this.props.updateStatus(e.target.value);
    }
  };

  render() {
    return (
      <div className={s.status}>
        {!this.state.editMode ? (
          <div
            className={this.props.status ? s.currentStatus : s.emtyStatus}
            onDoubleClick={this.activateEditMode}
          >
            {this.statusText()}
          </div>
        ) : (
          <div className={s.newStatus}>
            <input
              className={s.input}
              type="text"
              onKeyDown={this.escapeKey}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              //placeholder={this.props.status}
              defaultValue={this.props.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default Status;
