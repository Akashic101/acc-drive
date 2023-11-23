import { Text, Container, ActionIcon, Group, rem, Space } from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandDiscord,
} from "@tabler/icons-react";
import Logo from "../Logo/Logo";
import classes from "./FooterLinks.module.css";

const data = [
  {
    title: "About",
    links: [
      { label: "Home", link: "#" },
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Community", link: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Mirecourtstr. 8" },
      { label: "53225 Bonn" },
      { label: "Niklas Krause" },
      { label: "Discord: MrPig100" },
    ],
  },
  {
    title: "Impressum",
    links: [
      { label: "Impressum", link: "#" },
      { label: "Datenschutz (Website)", link: "#" },
      { label: "Datenschutz (Application)", link: "#" },
      { label: "Nutzungsbedigungen", link: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} className={classes.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Logo />
          <Space h={"lg"} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Supercharge your driving
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2023 ACC DRIVE. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandDiscord
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
