import {ContentHeader, ContentWrapper, ContentBody} from "@/components/contentWrapper/ContentWrapper";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title} from "@mantine/core";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Contact Us
          </Title>
          <Divider />
        </ContentHeader>
        <ContentBody>
          <>
            <p>
              Have a question? We’d love to hear from you.
              We do our best to respond to customer related issues and most other inquiries within 24 hours.
            </p>
            <p>If you have any questions or suggestions,
              feel free to contact us by sending an <a href="mailto:author.aparnajoshi@gmail.com">email</a>
            </p>
          </>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default ContactPage;
