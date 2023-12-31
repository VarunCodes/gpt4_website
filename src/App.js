import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatGPT4 } from './containers';
import { CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient_bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT4 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;