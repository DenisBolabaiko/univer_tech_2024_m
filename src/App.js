import React from 'react';
import NewsFeed from './components/NewsFeed';
import Header from './components/Layout.js/Header';
import Footer from './components/Layout.js/Footer';

const App = () => {
  return (
    <div>
      <div>
          <Header/>
          <NewsFeed />
      </div>
      <Footer />
  </div>
  );
}
export default App;