import React from 'react';
import marked from 'marked';

const PreviewPane = props => (
  <div className="preview-pane">
    <h4>&#8643; Markdown Preview &#8642;</h4>
    <div className="md-preview" dangerouslySetInnerHTML={{ __html: marked(props.inputText) }} />
  </div>
);

export default PreviewPane;
