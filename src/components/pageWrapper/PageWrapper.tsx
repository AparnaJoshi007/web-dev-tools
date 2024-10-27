'use client';

import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Text} from "@mantine/core";
import {SideBar} from "@/components/sideBar/SideBar";
import React from "react";
import {ColorSchemeToggle} from "@/components/colorSchemeToggle/ColorSchemeToggle";
import Link from "next/link";
import { BsTools } from "react-icons/bs";
import CookieConsent from "react-cookie-consent";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{ height: 64 }}
      footer={{ height: { base: 128, xs: 64, md: 64, lg: 64 } }}
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
      <AppShell.Footer p={"md"}>
        <Group justify={'space-between'}>
          <Text>© {new Date().getFullYear()} Web dev tools</Text>
          <Group justify={'space-between'}>
              <a href={'/about'}>About</a>
              <a href={'/contact'}>Contact</a>
              <a href={'/privacy-policy'}>Privacy Policy</a>
              <a href={'/disclaimer'}>Disclaimer</a>
              <a href={'/terms-of-services'}>Terms of Services</a>
          </Group>
        </Group>
      </AppShell.Footer>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="webdevtools-cookie"
        buttonStyle={{ background: "#da77f2", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </AppShell>
  )
}
