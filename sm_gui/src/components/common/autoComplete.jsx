import React, { Component } from "react";
import PropTypes from "prop-types";

import "./autoComplete.css";

export class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };
  static defaultProperty = {
    suggestions: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: -1,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      hoverIndex: -1,
    };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    let showSuggestions = filteredSuggestions.length ? true : false;

    this.setState({
      filteredSuggestions,
      showSuggestions,
      userInput: e.currentTarget.value,
      activeSuggestion: 0,
    });
  };

  onClick = (e) => {
    this.setState({
      activeSuggestion: -1,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    });

    this.props.onSelect(e.currentTarget.innerText);
  };
  onKeyDown = (e) => {
    const {
      state: { filteredSuggestions },
      props: { onSelect },
    } = this;
    let { activeSuggestion } = this.state;

    if (e.keyCode === 13) {
      if (filteredSuggestions.length > 0) {
        activeSuggestion = activeSuggestion === -1 ? 0 : activeSuggestion;
        this.setState({
          activeSuggestion,
          showSuggestions: false,
          userInput: "",
        });
        onSelect(filteredSuggestions[activeSuggestion]);
      } else {
        onSelect(null);
      }
    } else if (e.keyCode === 38) {
      activeSuggestion =
        activeSuggestion > 0
          ? activeSuggestion - 1
          : filteredSuggestions.length - 1;

      this.setState({
        activeSuggestion,
        userInput: filteredSuggestions[activeSuggestion],
      });
      e.preventDefault();
    } else if (e.keyCode === 40) {
      activeSuggestion =
        activeSuggestion === filteredSuggestions.length - 1
          ? 0
          : activeSuggestion + 1;

      this.setState({
        activeSuggestion,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
  };

  onMouseEnter = ({ currentTarget }) => {
    this.setState({ activeSuggestion: currentTarget.value });
  };

  onMouseLeave = (e) => {
    this.setState({ activeSuggestion: -1 });
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
      props: { placeHolder },
    } = this;
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul
            className="list-group mt-1 position-absolute ddwidth"
            onMouseLeave={onMouseLeave}
          >
            {filteredSuggestions.map((suggestion, index) => {
              let className = "list-group-item border-0";

              if (index === activeSuggestion) {
                className =
                  "list-group-item border-0 list-group-item-secondary";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                  onMouseEnter={onMouseEnter}
                  value={index}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      }
    }

    return (
      <React.Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder={placeHolder}
          className="form-control"
        />
        {suggestionsListComponent}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
