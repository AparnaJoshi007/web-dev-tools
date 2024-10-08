'use client';
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import React from "react";
import {Navigation} from "@/data/navigation";
import {Card} from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 12
      }}>
        {
          Navigation.map((nav) => (
            nav.items.map((item, index) => {
              const IconComponent = item.icon as React.FC;
              return (
                <Link style={{textDecoration: 'none'}} key={index} href={item.slug}>
                  <Card key={index} shadow="xs" padding="md" style={{
                    padding: 20,
                    border: '1px solid #DA77F2',
                    width: '300px',
                    height: '200px'
                  }}>
                    <IconComponent />
                    <h4>{item.label}</h4>
                    <p>{item.description}</p>
                  </Card>
                </Link>
              )})
          ))
        }
      </div>
    </PageWrapper>
  );
}
