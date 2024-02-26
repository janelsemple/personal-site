import * as React from "react"
import "./header.module.css"

const Header = ({ siteTitle }) => (
  <>
  <header>
    <div
      style={{flex: 'left', marginLeft:'1.3%'}}>
      {siteTitle}
    </div>
    <div style={{flex: 'right', marginRight: '1.3%'}}>
      About &middot; Experience &middot; Hobbies
    </div>
  </header>
  </>
)

export default Header
