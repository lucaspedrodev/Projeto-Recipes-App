import React from 'react';
import { useHistory } from 'react-router-dom';
import Drinks from '../components/Drinks';
import Meals from '../components/Meals';

export default function Recipe() {
  const history = useHistory();

  if (history.location.pathname.includes('meals')) {
    return (<Meals />);
  }
  return (<Drinks />);
}
