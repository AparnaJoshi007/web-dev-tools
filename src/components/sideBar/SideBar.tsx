'use client';

import {NavLink, ScrollArea} from "@mantine/core";
import { usePathname } from "next/navigation";
import React from "react";
import {Navigation} from "@/data/navigation";

export const SideBar = () => {
  const pathname = usePathname()

  const links = Navigation.map((nav, index) =>
    <NavLink key={index} label={nav.group} defaultOpened childrenOffset={16}>
      {nav.items.map((item, index) => {
        const IconComponent = item.icon as React.FC;
        return (
          <NavLink key={index} label={item.label} href={item.slug} active={pathname === item.slug} leftSection={<IconComponent />} />
        )}
      )}
    </NavLink>
  )

  return (
    <ScrollArea>
      <div>{links}</div>
    </ScrollArea>
  )
}
