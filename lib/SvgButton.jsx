var React = require('react');
var SvgIcon = require('./SvgIcon.jsx');

var SvgButton = React.createClass({

  render: function() {
    return (
      <button {...this.props}>
        <SvgIcon>
          {this.props.children}
        </SvgIcon>
      </button>
    );
  }

});

module.exports = SvgButton;
