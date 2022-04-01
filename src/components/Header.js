import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userState } = this.props;
    console.log(userState);
    return (
      <div>
        <h3 data-testid="email-field">
          Email:
          {userState}
        </h3>
        <h3 data-testid="total-field">
          0
        </h3>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.user.email,
});

Header.propTypes = {
  userState: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
