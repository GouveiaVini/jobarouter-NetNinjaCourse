import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum dolores alias, perspiciatis, recusandae ipsam nemo dolor et obcaecati, eveniet beatae laudantium quasi esse minus. Mollitia modi ipsam iure in.</p>

      <p>Go to the <Link to="/">Home Page</Link>.</p>
    </div>
  )
}
