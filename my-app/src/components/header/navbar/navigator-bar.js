import React, { Component } from 'react'
import '../../../mainstyle.css';
import '../headerstyle.css'
import NavMenuList from './navmenu'

class NavigatorBar extends Component {
  render() {
    const items = [
      { title: 'Home',
        href: 'xxx'
      },
      { title: 'News',
        href: 'xxx'
      },
      { title: 'Feed',
        href: 'xxx'
      },
      { title: 'Game',
        href: 'xxx'
      },
      { title: 'About',
        href: 'xxx'
      },
      { title: 'Contact',
        href: 'xxx'
      }]
    return (
      <div className="main-menu wrapper">
        <NavMenuList menuArray={items} />
      </div>
    )
  }
}

export default NavigatorBar
