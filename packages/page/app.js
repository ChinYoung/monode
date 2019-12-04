import App from './src';
import React from 'react';
import ReactDom from 'react-dom';
// 全局挂载request
import './src/lib/request';

ReactDom.render(<App />, document.getElementById("root"))
