var React = require('react/addons');

var SvgIcon = React.createClass({

  getStyles: function() {
    return {
      display: 'inline-block',
      height: '20px',
      width: '20px',
    };
  },

  render: function() {

    return (
      <svg
        viewBox="0 0 24 24"
        style={this.getStyles()} >
          {this.props.children}
      </svg>
    );
  }
});

module.exports = SvgIcon;
