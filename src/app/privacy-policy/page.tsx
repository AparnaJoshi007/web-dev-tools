import {ContentHeader, ContentWrapper, ContentBody} from "@/components/contentWrapper/ContentWrapper";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title} from "@mantine/core";
import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Privacy Policy
          </Title>
          <Divider />
        </ContentHeader>
        <ContentBody>
          <>
            <p>
              This privacy policy (&#34;policy&#34;) will help you understand how Web dev tools (&#34;us&#34;, &#34;we&#34;, &#34;our&#34;) uses and protects the data you provide to us when you visit and use Web dev tools (&#34;website&#34;, &#34;service&#34;).
              This policy describes the data we collect, how we use that data, and the choices we offer, including how to access and update information.
            </p>

            <h3>Ads and Google Analytics</h3>
            <p>
              We use Ads and Google Analytics to help analyze how users use the site and to display advertisements. These services use cookies and other tracking technologies to collect data about your interactions with our website.
              The data collected by Google Analytics is used to analyze and improve the performance of our website. The data collected by Ads is used to display personalized advertisements based on your interests and browsing behavior.
              You can opt-out of Google Analytics by installing the Google Analytics opt-out browser add-on. You can also opt-out of personalized ads by visiting Google&#39;s Ads Settings.
              For more information on Google&#39;s privacy practices, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
            </p>
          </>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default PrivacyPolicyPage;
