import React from 'react';
import marked from 'marked';

const PreviewPane = props => (
  <div
    className='preview-pane'  
    dangerouslySetInnerHTML={{ __html: marked(props.inputText) }}
  />
);

export default PreviewPane;
