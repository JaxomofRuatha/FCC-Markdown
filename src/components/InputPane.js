import React from 'react';

const InputPane = props => (
  <textarea value={props.inputText} onChange={props.onChange} />
);

export default InputPane;
