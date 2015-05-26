var React = require('react');
var EditB = require('../lib/EditButton.jsx');

function handle() {
  console.log('bla');
}

React.render(<EditB onClick={handle} />, document.body);
