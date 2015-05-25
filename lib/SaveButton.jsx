var React = require('react');
var mui = require('material-ui');
var IconButton = mui.IconButton;
var SvgIcon = mui.SvgIcon;

var SaveButton = React.createClass({
  render: function() {
    return (
      <IconButton {...this.props} tooltip="save" touch={true}>
        <SvgIcon>
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </SvgIcon>
      </IconButton>
    );
  }
});

module.exports = SaveButton;
