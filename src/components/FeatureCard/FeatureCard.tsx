import {
  Card,
  Avatar,
  Image,
  Text,
  Button,
  Divider,
  Modal,
  Space,
  Title,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import classes from "./FeatureCard.module.css";
import I18n from "../../i18n.js";
import accdrive1 from "../../media/acc_1.jpg";

interface FeatureCardProps {
  featureName: string;
  featureText: string;
  longText: string;
  modalText: string;
  icon: ReactNode;
  image: string;
}

export function FeatureCard({
  featureName,
  featureText,
  longText,
  modalText,
  icon,
  image,
}: FeatureCardProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title={<Title>{featureName}</Title>}
      >
        <Space h="md" />
        {<Image radius="md" src={accdrive1} />}
        <Space h="md" />
        <Divider />
        <Space h="md" />
        <Text>{modalText}</Text>
        <Divider />
        <Button
          className={classes.button}
          color={"#85d46c"}
          variant="outline"
          onClick={() => {
            close();
          }}
        >
          {I18n.t("general.close")}
        </Button>
      </Modal>
      <Card
        w={"20%"}
        withBorder
        padding="xl"
        radius="md"
        className={classes.card}
      >
        <Card.Section h={140}>
          <Image src={image} height={140} alt={featureName} />
        </Card.Section>
        <Avatar
          size={90}
          radius={80}
          mx="auto"
          mt={-30}
          className={classes.avatar}
        >
          {icon}
        </Avatar>
        <Card.Section h={240}>
          <Text ta="center" fz="lg" fw={500} mt="sm">
            {featureName}
          </Text>
          <Text ta="center" fz="sm" c="dimmed">
            {featureText}
          </Text>
          <Divider my="sm" />
          <Container w={"90%"}>
            <Text ta="center" fz="sm" c="dimmed">
              {longText}
            </Text>
          </Container>
        </Card.Section>
        <Button
          fullWidth
          radius="md"
          mt="xl"
          size="md"
          variant="light"
          color={"#66ae3f"}
          onClick={open}
        >
          {I18n.t("general.learnMore")}
        </Button>
      </Card>
    </>
  );
}
