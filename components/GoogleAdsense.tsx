import React from 'react'

export class GoogleAdSense extends React.Component {
  // componentDidMount() {
  //   // Google AdSense 코드를 여기에 삽입하세요
  //   // 예시: (테스트 광고 코드)
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // }

  render() {
    return (
      <div>
        {/* 광고를 노출할 영역 */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1882367656929494"
          data-ad-slot="6200588402"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    );
  }
}