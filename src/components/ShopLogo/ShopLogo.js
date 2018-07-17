import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "components/Link";

export default class ShopLogo extends Component {
  static propTypes = {
    /**
     * The primary shop's logo url
     */
    shopLogoImgUrl: PropTypes.string,
    /**
     * The primary shop's name
     */
    shopName: PropTypes.string.isRequired
  }

  render() {
    const { shopLogoImgUrl, shopName } = this.props;

    return (
      <Link route="/">
        {
          shopLogoImgUrl ? (
            <img src={shopLogoImgUrl} alt={shopName} />
          ) : (
            shopName
          )
        }
      </Link>
    );
  }
}

