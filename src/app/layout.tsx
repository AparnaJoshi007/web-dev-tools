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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"/>
      <script async dangerouslySetInnerHTML={{
        __html: `
            (function() {
            var host = "www.themoneytizer.com";
            var element = document.createElement('script');
            var firstScript = document.getElementsByTagName('script')[0];
            var url = 'https://cmp.inmobi.com'
            .concat('/choice/', '6Fv0cGNfc_bw8', '/', host, '/choice.js?tag_version=V3');
            var uspTries = 0;
            var uspTriesLimit = 3;
            element.async = true;
            element.type = 'text/javascript';
            element.src = url;
    
            firstScript.parentNode.insertBefore(element, firstScript);
    
            function makeStub() {
            var TCF_LOCATOR_NAME = '__tcfapiLocator';
            var queue = [];
            var win = window;
            var cmpFrame;
    
            function addFrame() {
            var doc = win.document;
            var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);
    
            if (!otherCMP) {
            if (doc.body) {
            var iframe = doc.createElement('iframe');
    
            iframe.style.cssText = 'display:none';
            iframe.name = TCF_LOCATOR_NAME;
            doc.body.appendChild(iframe);
          } else {
            setTimeout(addFrame, 5);
          }
          }
            return !otherCMP;
          }
    
            function tcfAPIHandler() {
            var gdprApplies;
            var args = arguments;
    
            if (!args.length) {
            return queue;
          } else if (args[0] === 'setGdprApplies') {
            if (
            args.length > 3 &&
            args[2] === 2 &&
            typeof args[3] === 'boolean'
            ) {
            gdprApplies = args[3];
            if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
          }
          } else if (args[0] === 'ping') {
            var retr = {
            gdprApplies: gdprApplies,
            cmpLoaded: false,
            cmpStatus: 'stub'
          };
    
            if (typeof args[2] === 'function') {
            args[2](retr);
          }
          } else {
            if(args[0] === 'init' && typeof args[3] === 'object') {
            args[3] = Object.assign(args[3], { tag_version: 'V3' });
          }
            queue.push(args);
          }
          }
    
            function postMessageEventHandler(event) {
            var msgIsString = typeof event.data === 'string';
            var json = {};
    
            try {
            if (msgIsString) {
            json = JSON.parse(event.data);
          } else {
            json = event.data;
          }
          } catch (ignore) {}
    
            var payload = json.__tcfapiCall;
    
            if (payload) {
            window.__tcfapi(
            payload.command,
            payload.version,
            function(retValue, success) {
            var returnMsg = {
            __tcfapiReturn: {
            returnValue: retValue,
            success: success,
            callId: payload.callId
          }
          };
            if (msgIsString) {
            returnMsg = JSON.stringify(returnMsg);
          }
            if (event && event.source && event.source.postMessage) {
            event.source.postMessage(returnMsg, '*');
          }
          },
            payload.parameter
            );
          }
          }
    
            while (win) {
            try {
            if (win.frames[TCF_LOCATOR_NAME]) {
            cmpFrame = win;
            break;
          }
          } catch (ignore) {}
    
            if (win === window.top) {
            break;
          }
            win = win.parent;
          }
            if (!cmpFrame) {
            addFrame();
            win.__tcfapi = tcfAPIHandler;
            win.addEventListener('message', postMessageEventHandler, false);
          }
          };
    
            makeStub();
    
            var uspStubFunction = function() {
            var arg = arguments;
            if (typeof window.__uspapi !== uspStubFunction) {
            setTimeout(function() {
            if (typeof window.__uspapi !== 'undefined') {
            window.__uspapi.apply(window.__uspapi, arg);
          }
          }, 500);
          }
          };
    
            var checkIfUspIsReady = function() {
            uspTries++;
            if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
            console.warn('USP is not accessible');
          } else {
            clearInterval(uspInterval);
          }
          };
    
            if (typeof window.__uspapi === 'undefined') {
            window.__uspapi = uspStubFunction;
            var uspInterval = setInterval(checkIfUspIsReady, 6000);
          }
          })();
        `,
      }} />
    </head>
    <body>
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>{children}</MantineProvider>
    </body>
    </html>
  );
}
