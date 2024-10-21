import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  * as Sentry from 'sentry-cordova';
import './styles.css';

const Home = () => {
  const navigate = useNavigate();
  const [platformClass, setPlatformClass] = useState('ios-button');
  function gotoPage1() {
    alert("we tried");
    Sentry.captureMessage('Hello World');
    navigate('/page1');
  }
  useEffect(() => {
    // @ts-ignore
    if (window.cordova && window.device) {
    // @ts-ignore
    const platform = window.device.platform;
      setPlatformClass(platform === 'Android' ? 'android-button' : 'ios-button');
    }
  }, []);

  return (
    <div className="button-list-container">
      <h1>Hello, Sentry Cordova!</h1>
      <button className={platformClass} type="button" onClick={gotoPage1}>Go to Page 1</button>
      <button className={platformClass} type="button" onClick={() => navigate('/page2')}>Go to Page 2</button>
      <button className={platformClass} type="button" onClick={() => navigate('/page3')}>Go to Page 3</button>
    </div>
  );
};

export default Home;
