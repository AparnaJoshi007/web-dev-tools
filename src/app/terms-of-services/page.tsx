import {ContentHeader, ContentWrapper, ContentBody} from "@/components/contentWrapper/ContentWrapper";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title} from "@mantine/core";
import React from "react";

const TermsOfServicesPage: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Terms of Services
          </Title>
          <Divider />
        </ContentHeader>
        <ContentBody>
          <>
          <p>
            Welcome to Web dev tools. These terms and conditions outline the rules and regulations for the use of our website.
          </p>

          <h4>Acceptance of Terms</h4>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Web dev tools if you do not agree to all of the terms and conditions stated on this page.
          </p>

          <h4>License</h4>
          <p>
            Unless otherwise stated, Web dev tools and/or its licensors own the intellectual property rights for all material on Web dev tools. All intellectual property rights are reserved. You may access this from Web dev tools for your own personal use subjected to restrictions set in these terms and conditions.
          </p>

          <h4>Limitation of Liability</h4>
          <p>
            In no event shall Web dev tools, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Web dev tools, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
          </p>

          <h4>Governing Law</h4>
          <p>
            These terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the State for the resolution of any disputes.
          </p>
          </>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default TermsOfServicesPage;
