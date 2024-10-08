'use client';

import {ActionIcon, useComputedColorScheme, useMantineColorScheme} from '@mantine/core';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import classes from "./ColorSchemeToggle.module.css";
import cx from 'clsx';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });


  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <MdOutlineWbSunny className={cx(classes.icon, classes.light)} />
      <IoMoonOutline className={cx(classes.icon, classes.dark)}  />
    </ActionIcon>
  );
}
