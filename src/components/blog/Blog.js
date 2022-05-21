import React from 'react'
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import { NotionRenderer } from 'react-notion';

import response from './load-page-chunk-response.json';

const Blog = () => {
  return (
    <div style={{ maxWidth: 768 }}>
      {/* <NotionRenderer blockMap={blockMap} /> */}
    </div>
  );
}

export default Blog;