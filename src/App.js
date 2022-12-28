import React from 'react';
import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Reviews />
    </div>
  )
}
