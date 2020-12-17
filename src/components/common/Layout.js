import React from 'react'
import "../../css/components/Layout.css"

function Layout(props) {
    return (
        <div>

     <div>
      {props.children}

    </div>
   </div>

    )
}

export default Layout
