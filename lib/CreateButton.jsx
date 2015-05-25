var React = require('react');
var mui = require('material-ui');
var IconButton = mui.IconButton;
var SvgIcon = mui.SvgIcon;

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
      <IconButton onClick={this._handleClick} tooltip="Create" touch={true}>
        <SvgIcon>
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </SvgIcon>
      </IconButton>
    );
  }
});

module.exports = CreateButton;
