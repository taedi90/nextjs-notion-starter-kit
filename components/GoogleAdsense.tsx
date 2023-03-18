import React, {useEffect} from 'react';
import styles from './styles.module.css';

declare global {
  interface Window {
    adsbygoogle?: any
  }
}

export const GoogleAdSense: React.FC = () => {
  useEffect(() => {
    const adTop = document.getElementById('ad-top');
    const adBottom = document.getElementById('ad-bottom');

    const parentNode = document.querySelector('article');
    if (!parentNode) {
      return
    }

    const firstChild = parentNode.firstChild as Element | null;
  if (!firstChild) {
    return;
  }

    parentNode.insertBefore(adTop, firstChild);
    // parentNode.insertBefore(adBottom, aside);

    parentNode.append(adBottom);

    // 구글 애드센스 코드 초기화
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
    <div className={styles.adsense} id="ad-top">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1882367656929494"
        data-ad-slot="6200588402"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
    <div className={styles.adsense} id="ad-bottom">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1882367656929494"
        data-ad-slot="6200588402"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
    </>
  );
}
