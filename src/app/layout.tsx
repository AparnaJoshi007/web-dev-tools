import '@mantine/core/styles.css';
import {theme} from "@/themes/theme";
import {ColorSchemeScript, MantineProvider} from "@mantine/core";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Web dev tools override',
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
      <ColorSchemeScript/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"/>
    </head>
    <body>
      <MantineProvider defaultColorScheme={'dark'} theme={theme}>{children}</MantineProvider>
    </body>
    </html>
  );
}
