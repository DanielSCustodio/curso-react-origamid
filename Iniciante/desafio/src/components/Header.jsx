import React from 'react'
import Link from './Link'

const Header = () => {
  return (
    <div>
      <header>
        <ul>
          <li><Link href="/" name="Home" /></li>
          <li><Link href="/produtos" name="Produtos" /></li>
        </ul>
      </header>
    </div>
  )
}

export default Header