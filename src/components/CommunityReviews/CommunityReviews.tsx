import {
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  Space,
  Image,
} from "@mantine/core";
import classes from "./CommunityReviews.module.css";
import face1 from "../../media/face_1.jpg";

const data = [
  {
    image: { face1 },
    title: "Kaiser",
    subtitle: "Twitch Streamer",
    description: "ACC DRIVE helped me perfecting my pitstops with amazing ease",
  },
  {
    image: "lawyers",
    title: "Fox",
    subtitle: "E-Sports Racer",
    description:
      "Knowing where incidents happen and where yellow flags are is an amazing advantage when racing",
  },
  {
    image: "accountants",
    title: "Peach",
    subtitle: "Community Member",
    description:
      "Knowing how my tyres are performing at all times gives me great security which in turn improves my performance",
  },
  {
    image: "others",
    title: "Pixel",
    subtitle: "Twitch Streamer",
    description:
      "The amazing community helped me out finding the perfect setup for my races",
  },
];

export function CommunityReviews() {
  const items = data.map((item) => (
    <div className={classes.item}>
      <Image
        className={classes.communityAvatar}
        radius="xl"
        h={60}
        w={60}
        src={face1}
      ></Image>
      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text size="xs" fs="italic">
          {item.subtitle}
        </Text>
        <Space h="xs" />
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Title className={classes.title} order={2}>
        ACC DRIVE is perfect for <span className={classes.highlight}>all</span>{" "}
        drivers
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Whether you are a beginnner or a pro, ACC DRIVE will push your racing
          to the next level. Hear from our amazing community how ACC DRIVE
          helped and improve their driving
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
