import {ContentHeader, ContentWrapper, ContentBody} from "@/components/contentWrapper/ContentWrapper";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title} from "@mantine/core";
import React from "react";

const DisclaimerPage: React.FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Disclaimer
          </Title>
          <Divider />
        </ContentHeader>
        <ContentBody>
          <>
            <p>
              Web dev tools is a collection of tools that help web developers to work more efficiently.
              The information provided by the tools is for general information purposes only.
              UNDER NO CIRCUMSTANCES SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE.
              YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>

            <p>
              The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising.
            </p>
          </>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default DisclaimerPage;
