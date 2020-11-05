import React from 'react';
import './App.css';
import VideoBackground from './components/VideoBackground';
import RootRouter from './routers/RootRouter';

const App = () =>  {
  return (
    <>
      <VideoBackground />
      <RootRouter />
    </>
  );
};

export default App;
