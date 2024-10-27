import '@mantine/core/styles.css';
import {theme} from "@/themes/theme";
import {ColorSchemeScript, MantineProvider} from "@mantine/core";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Web dev tools',
  description: 'A collection of web development tools such as JSON to YAML converter, YAML to JSON converter, and more. To be used by web developers and web designers.',
  keywords: 'converter, genearator, yaml, json',
  authors: [{ name: 'Saliene Katana'}],
  icons: {
    icon: '/assets/icons/icon.png',
    apple: '/assets/icons/icon.png',
  },
  openGraph: {
    type: "website",
    url: "https://allwebstools.com/",
    title: "Web dev tools",
    description: "A collection of web development tools",
    siteName: "Web dev tools",
    images: [{ url: "https://allwebstools.com/assets/icons/icon.png" }],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <script src="https://alwingulla.com/88/tag.min.js" data-zone="110655" async data-cfasync="false"></script>
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
      <ColorSchemeScript/>
      <meta charSet="UTF-8"/>
      <meta name="google-adsense-account" content="ca-pub-8266307118119656"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"/>
    </head>
    <body>
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>{children}</MantineProvider>
    </body>
    </html>
  );
}
