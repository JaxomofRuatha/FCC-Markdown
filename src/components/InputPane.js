import React from 'react';
import PropTypes from 'prop-types';

const InputPane = props => (
  <section className="input-pane">
    <h1 className="top-label">&#8643; Replace Markdown &#8642;</h1>
    <textarea className="input-pane__text" value={props.inputText} onChange={props.onChange} />
  </section>
);

InputPane.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputPane;
