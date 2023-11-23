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
import I18n from "../../i18n.js";
import { useTranslation } from "react-i18next";

export function CommunityReviews() {
  const { t } = useTranslation("translations");
  const data = [
    {
      image: { face1 },
      title: I18n.t("reviews.review1.name"),
      subtitle: I18n.t("reviews.review1.role"),
      description: I18n.t("reviews.review1.review"),
    },
    {
      image: { face1 },
      title: I18n.t("reviews.review2.name"),
      subtitle: I18n.t("reviews.review2.role"),
      description: I18n.t("reviews.review2.review"),
    },
    {
      image: { face1 },
      title: I18n.t("reviews.review3.name"),
      subtitle: I18n.t("reviews.review3.role"),
      description: I18n.t("reviews.review3.review"),
    },
    {
      image: { face1 },
      title: I18n.t("reviews.review4.name"),
      subtitle: I18n.t("reviews.review4.role"),
      description: I18n.t("reviews.review4.review"),
    },
  ];

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
