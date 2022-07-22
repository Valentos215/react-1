import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
    overflow: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
      this.setState({
        status: this.props.status,
      });
  }
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
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  changeStatus = (e) => {
    this.setState({
      overflow: false,
    });
    if (e.target.value.length > 50)
      this.setState({
        overflow: true,
      });
    else
      this.setState({
        status: e.target.value,
      });
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
              className={this.state.overflow ? s.overflow : s.input}
              type="text"
              onKeyDown={this.escapeKey}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              onChange={this.changeStatus}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default Status;
