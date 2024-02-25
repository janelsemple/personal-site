import * as React from "react"
import './header.module.css'

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{flex: 'left'}}>
      {siteTitle}
    </div>
    <div style={{flex: 'right'}}>
      Home &middot; Resume &middot; Hobbies
    </div>
  </header>
)

export default Header
