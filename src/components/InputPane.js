import React from 'react';

const InputPane = props => (
  <div className="input-pane">
    <h4>&#8643; Replace Markdown &#8642;</h4>
    <textarea className="md-input" value={props.inputText} onChange={props.onChange} />
  </div>
);

export default InputPane;
