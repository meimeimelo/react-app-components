import React, { Component } from 'react'
import '../../../mainstyle.css';
import '../headerstyle.css'
import NavMenuList from './navmenu'

class NavigatorBar extends Component {
  render() {
    const items = [
      { title: 'item1',
        href: 'xxx'
      },
      { title: 'item2',
        href: 'xxx'
      },
      { title: 'item3',
        href: 'xxx'
      },
      { title: 'item4',
        href: 'xxx'
      },
      { title: 'item5',
        href: 'xxx'
      },
      { title: 'item6',
        href: 'xxx'
      }]
    return (
      <div>
        <div className='main-menu wrapper'>
          <NavMenuList menuArray={items} />
        </div>
      </div>
    )
  }
}

export default NavigatorBar
