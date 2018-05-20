import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const PreviewPane = ({ inputText }) => (
  <div className="preview-pane">
    <h1 className="top-label">&#8643; Markdown Preview &#8642;</h1>
    <div className="preview-pane__text" dangerouslySetInnerHTML={{ __html: marked(inputText) }} />
  </div>
);

PreviewPane.propTypes = {
  inputText: PropTypes.string.isRequired
};

export default PreviewPane;
