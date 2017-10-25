import React from 'react';
import marked from 'marked';

const PreviewPane = props => (
  <div
    dangerouslySetInnerHTML={{ __html: marked(props.inputText, { sanitize: true }) }}
  />
);

export default PreviewPane;
