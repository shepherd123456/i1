import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function FirstNavbarActions() {
  const [actions, setActions] = useState(ACTIONS);

  return (
    <div className='bg-red-500'>
      asd
    </div>
  )
}

const ACTIONS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'prihlasit'
  },
  {
    icon: <FontAwesomeIcon icon={faBasketShopping} />,
    title: 'kosik'
  },
]

export default FirstNavbarActions