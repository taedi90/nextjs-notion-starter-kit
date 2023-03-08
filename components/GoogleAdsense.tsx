import React from 'react'

import styles from './styles.module.css'
export class GoogleAdSense extends React.Component {
  componentDidMount() {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }

  render() {
    return (
      <div className={styles.googleAdsense}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1882367656929494"
          data-ad-slot="6200588402"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}