import '@mantine/core/styles.css';
import {theme} from "@/themes/theme";
import {ColorSchemeScript, MantineProvider} from "@mantine/core";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Web dev tools',
  description: 'A collection of web development tools',
  keywords: 'converter, generator, yaml, json',
  authors: [{ name: 'Saliene Katana'}]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FNBFT2CK05"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FNBFT2CK05');
          `,
        }}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8266307118119656"
              crossOrigin="anonymous"></script>
      <ColorSchemeScript/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"/>
      <meta name="google-adsense-account" content="ca-pub-8266307118119656"/>
    </head>
    <body>
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>{children}</MantineProvider>
    </body>
    </html>
  );
}
