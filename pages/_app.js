import React from 'react';
import App from 'next/app';

import { Reset } from '../components/Layout/Reset';
import { appWithTranslation } from '../utils/i18n';
import { ProvideAuth } from '../hooks/useAuth';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ProvideAuth>
        <Reset />
        <Component {...pageProps} />
      </ProvideAuth>
    );
  }
}

export default appWithTranslation(MyApp);
