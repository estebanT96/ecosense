"use client";
import React from "react";
import { PageLayout } from "@primer/react";
const page = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Placeholder height={64}>Header</Placeholder>
      </PageLayout.Header>
      <PageLayout.Pane width={{min: '100px', default: '1000px', max: '500px'}}>
        <Placeholder height={200}>Pane</Placeholder>
      </PageLayout.Pane>
      <PageLayout.Content  >
        <Placeholder height={400}>Content</Placeholder>
      </PageLayout.Content>
      <PageLayout.Footer>
        <Placeholder height={64}>Footer</Placeholder>
      </PageLayout.Footer>
    </PageLayout>
  );
};

function Placeholder({
  height,
  children,
}: {
  height: number | string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        height,
        display: "grid",
        placeItems: "center",
        backgroundColor: "var(--bgColor-inset)",
        borderRadius: 5,
        border: "1px solid var(--borderColor-muted)",
      }}
    >
      {children}
    </div>
  );
}
export default page;
