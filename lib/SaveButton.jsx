var React = require('react');
var SvgButton = require('./SvgButton.jsx');

var SaveButton = React.createClass({
  render: function() {
    return (
      <SvgButton {...this.props}>
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </SvgButton>
    );
  }
});

module.exports = SaveButton;
