import React from 'react';
import App from 'next/app';

import { Reset } from '../components/Layout/Reset';
import { appWithTranslation } from '../utils/i18n';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Reset />
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
