import React from "react";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";

class NavItem extends React.Component {
  render() {

    const name = this.props.name;
    const path = this.props.path;

    return (
      <FlatButton
        containerElement={<Link to={path} />}
        href={path}
        label={name}
        labelPosition="before"
        primary={true}
      />
    );
  }
}
export default NavItem;
