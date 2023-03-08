import React from 'react'

declare global {
  interface Window {
    adsbygoogle?: { push: (p: object) => void };
  }
}

export class GoogleAdSense extends React.Component {
  componentDidMount() {
    if (window.adsbygoogle) {
      this.setState({ display: 'block' });
      // const element = document.getElementById('my-element');
      // // 스타일을 변경합니다.
      // element.style.display = 'none';
      if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1882367656929494"
        data-ad-slot="6200588402"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}