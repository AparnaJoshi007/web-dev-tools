import {ContentHeader, ContentWrapper, ContentBody} from "@/components/contentWrapper/ContentWrapper";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title} from "@mantine/core";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            About Web dev tools
          </Title>
          <Divider />
        </ContentHeader>
        <ContentBody>
          <>
            <p>
              Web dev tools is a collection of tools that help web developers to work more efficiently.
              The tools are designed to be simple and easy to use.
              The tools are free to use and do not require any registration.
            </p>

            <p>
              The tools are built using modern web technologies and are designed to work on all devices.
              The tools are constantly updated and new tools are added regularly.
            </p>

            <p>
              If you have any questions or suggestions, feel free to <a href={'/contact'}>contact us</a>.
            </p>
          </>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default AboutPage;
