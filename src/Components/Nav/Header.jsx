import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../commonResource/images/icons/logo-sm.png';
import searchIcon from '../../commonResource/images/icons/search-icon-sm.png';
import cartIcon from '../../commonResource/images/icons/cart-sm.png';

function Header() {
  const headerLinks = [
    { LinkUrl: '/mac', LinkName: 'Mac' },
    { LinkUrl: '/iPhone', LinkName: 'iPhone' },
    { LinkUrl: '/iPad', LinkName: 'iPad' },
    { LinkUrl: '/Watch', LinkName: 'Watch' },
    { LinkUrl: '/TV', LinkName: 'TV' },
    { LinkUrl: '/Music', LinkName: 'Music' },
    { LinkUrl: '/Support', LinkName: 'Support' },
    { LinkUrl: '/search/', LinkName: '', Icon: searchIcon },
    { LinkUrl: '/cart/', LinkName: '', Icon: cartIcon }
  ];

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link to="/" className="navbar-brand mx-auto">
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              {headerLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  {link.Icon ? (
                    <Link to={link.LinkUrl} className="nav-link js-scroll-trigger">
                      <img src={link.Icon} />
                    </Link>
                  ) : (
                    <Link to={link.LinkUrl} className="nav-link js-scroll-trigger">
                      {link.LinkName}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;