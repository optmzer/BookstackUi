import { AppInsights, timeMeasurement } from 'applicationinsights-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

AppInsights.downloadAndSetup(
  { 
    instrumentationKey: process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY,
    url: 'https://az416426.vo.msecnd.net/scripts/a/ai.js'
  }
);
AppInsights.trackPageView("Index");
AppInsights.trackEvent("PageLoad");
AppInsights.trackMetric("LoadTime", timeMeasurement); 
ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
