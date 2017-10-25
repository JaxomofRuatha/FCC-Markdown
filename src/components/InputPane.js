import React from 'react';

const InputPane = props => (
  <textarea className='input-pane' value={props.inputText} onChange={props.onChange} />
);

export default InputPane;
