import * as React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
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
