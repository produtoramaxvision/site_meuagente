import { useEffect } from 'react';

interface GTMProps {
  gtmId?: string;
}

const GTM = ({ gtmId = "GTM-XXXXXXX" }: GTMProps) => {
  useEffect(() => {
    if (!gtmId || gtmId === "GTM-XXXXXXX") {
      console.log("GTM não configurado. Adicione GTM_ID nas variáveis de ambiente.");
      return;
    }

    // Google Tag Manager script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);

    // noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      // Cleanup
      document.head.removeChild(script);
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, [gtmId]);

  return null;
};

export default GTM;

