import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Space,
  Center,
  Anchor,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandDiscord,
} from "@tabler/icons-react";
import Logo from "../Logo/Logo";
import classes from "./FooterLinks.module.css";
import { Link } from "react-scroll";

const data = [
  {
    title: "About",
    links: [
      { label: "Home", id: "home" },
      { label: "Features", id: "features" },
      { label: "Pricing", id: "pricing" },
      { label: "Community", id: "community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Mirecourtstr. 8", id: "#" },
      { label: "53225 Bonn", id: "#" },
      { label: "Niklas Krause", id: "#" },
      { label: "Discord: MrPig100", id: "#" },
    ],
  },
  {
    title: "Impressum",
    links: [
      { label: "Impressum", id: "https://accdrive.com/impressum" },
      { label: "Datenschutz (Website)", id: "https://accdrive.com/privacy" },
      {
        label: "Datenschutz (Application)",
        id: "https://accdrive.com/privacy",
      },
      { label: "Nutzungsbedigungen", id: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => {
      let linkElement;

      if (group.title === "About") {
        linkElement = (
          <Link key={index} to={link.id} className={classes.link}>
            <Text>{link.label}</Text>
          </Link>
        );
      } else if (group.title === "Impressum") {
        linkElement = (
          <Anchor
            key={index}
            href={link.id}
            className={`${classes.link}`}
            style={{
              textDecoration:
                group.title === "Impressum" ? "underline" : "none",
            }}
          >
            {link.label}
          </Anchor>
        );
      } else {
        linkElement = (
          <Text key={index} className={classes.nonLink}>
            {link.label}
          </Text>
        );
      }

      return linkElement;
    });

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <Center>
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
    </Center>
  );
}
