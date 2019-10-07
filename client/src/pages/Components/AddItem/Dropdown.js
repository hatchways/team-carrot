import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown">
        <div className="button" onClick={this.showDropdownMenu}>
          Select List +
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className="active" href="#Create Page">
                Gadgets
              </a>
            </li>
            <li>
              <a href="#">Clothes</a>
            </li>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Luxury</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
