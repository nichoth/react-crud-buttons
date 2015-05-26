var React = require('react');
var SvgIcon = require('./SvgIcon.jsx');

var CreateButton = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
  },

  _handleClick: function(event) {
    event.preventDefault();
    this.props.onClick();
  },

  render: function() {
    return (
        <SvgIcon>
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </SvgIcon>
    );
  }
});

module.exports = CreateButton;
