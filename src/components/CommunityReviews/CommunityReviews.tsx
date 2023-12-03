import {
  Text,
  Container,
  Title,
  SimpleGrid,
  Space,
  Image,
} from "@mantine/core";
import classes from "./CommunityReviews.module.css";
import face1 from "../../media/face_1.jpg";
import face2 from "../../media/face_2.jpg";
import face3 from "../../media/face_3.jpg";
import face4 from "../../media/face_4.jpg";
import I18n from "../../i18n.js";
import { useTranslation } from "react-i18next";

export function CommunityReviews() {
  const { t } = useTranslation("translations");
  const data = [
    {
      image: face1,
      title: I18n.t("reviews.review1.name"),
      subtitle: I18n.t("reviews.review1.role"),
      description: I18n.t("reviews.review1.review"),
    },
    {
      image: face2,
      title: I18n.t("reviews.review2.name"),
      subtitle: I18n.t("reviews.review2.role"),
      description: I18n.t("reviews.review2.review"),
    },
    {
      image: face3,
      title: I18n.t("reviews.review3.name"),
      subtitle: I18n.t("reviews.review3.role"),
      description: I18n.t("reviews.review3.review"),
    },
    {
      image: face4,
      title: I18n.t("reviews.review4.name"),
      subtitle: I18n.t("reviews.review4.role"),
      description: I18n.t("reviews.review4.review"),
    },
  ];

  const items = data.map((item) => (
    <div className={classes.item} key={item.title}>
      <Image
        className={classes.communityAvatar}
        radius="xl"
        h={60}
        w={60}
        src={item.image}
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
        {I18n.t("reviews.description.title.one")}
        <span className={classes.highlight}>
          {I18n.t("reviews.description.title.divider")}
        </span>
        {I18n.t("reviews.description.title.two")}
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          {I18n.t("reviews.description.title.subtitle")}
        </Text>
      </Container>
      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
