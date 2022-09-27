import { useEffect } from 'react';

interface IProps {
  client: string;
  slot: string;
}

export function GoogleAdsenseContainer(props: IProps) {
  const { client, slot } = props;

  const loadAds = () => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error: any) {
      console.log('adsense error', error.message);
    }
  };
  useEffect(() => {
    loadAds();
  }, []);

  return (
    <div style={{ textAlign: 'left', overflow: 'hidden' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="96"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
