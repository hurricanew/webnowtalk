import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
    window.matchMedia = window.matchMedia || function() {
        return {
            matches : false,
            addListener : function() {},
            removeListener: function() {}
        };
    };
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
