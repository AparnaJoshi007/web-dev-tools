'use client';

import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Text} from "@mantine/core";
import {SideBar} from "@/components/sideBar/SideBar";
import React from "react";
import {ColorSchemeToggle} from "@/components/colorSchemeToggle/ColorSchemeToggle";
import Link from "next/link";
import { BsTools } from "react-icons/bs";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="sm"
    >
      <AppShell.Header>
        <Group p={'xs'} justify={'space-between'} >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Link style={{ textDecoration: 'none' }} href={'/'}>
            <Group>
              <BsTools />
              <Text c={'grape'}>Web dev tools</Text>
            </Group>
          </Link>
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <SideBar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
