import {
  Card,
  Avatar,
  Image,
  Text,
  Button,
  Divider,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import classes from "./FeatureCard.module.css";

interface FeatureCardProps {
  featureName: string;
  featureText: string;
  longText: string;
  icon: ReactNode;
  image: string;
}

export function FeatureCard({
  featureName,
  featureText,
  longText,
  icon,
  image,
}: FeatureCardProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {}
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
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {featureName}
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          {featureText}
        </Text>
        <Divider my="sm" />
        <Text ta="center" fz="sm" c="dimmed">
          {longText}
        </Text>
        <Button
          fullWidth
          radius="md"
          mt="xl"
          size="md"
          variant="light"
          color={"#66ae3f"}
          onClick={open}
        >
          Learn more
        </Button>
      </Card>
    </>
  );
}
