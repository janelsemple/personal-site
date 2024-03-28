import * as React from "react"
import {inner} from "./header.module.css"

const Header = ({ siteTitle }) => (
  <>
  <header>
    <div className={inner}>
    <div
      style={{flex: 'left', marginLeft:'1.3%'}}>
      JS
    </div>
    <div style={{flex: 'right', marginRight: '1.3%'}}>
      About &middot; Experience &middot; Hobbies
    </div>
    </div>
  </header>
  </>
)

export default Header
