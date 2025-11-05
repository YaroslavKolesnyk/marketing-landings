import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        <script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          async
          defer
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof AOS !== 'undefined') {
                  AOS.init({ duration: 800, once: true });
                }
              });
            `,
          }}
        />

        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1132175832408159');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}