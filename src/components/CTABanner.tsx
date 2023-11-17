import {
  Text,
  Title,
  Button,
  Image,
  Stack,
  Group,
  Space,
  Center,
} from "@mantine/core";
import collage from "../media/drive-collage.png";
import classes from "./CTABanner.module.css";

export function CTABanner() {
  return (
    <Group justify="center" gap="xl">
      <Center inline>
        <Stack maw={"500px"} h={300} align="flex-start" gap="xs">
          <h1 className={classes.title}>
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "green", to: "#66ae3f" }}
              inherit
            >
              GET ACC DRIVE NOW!
            </Text>
          </h1>
          <Title order={4} className={classes.title}>
            Get your lifetime license for only 25€
          </Title>
          <Text>
            Your ACC DRIVE-license will be linked to your Steam-Account. If you
            want to change the linked account you can contact us via Discord.
          </Text>
          <Button fullWidth color={"#ffc438"}>
            Check out with Paypal!
          </Button>
        </Stack>
      </Center>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Image miw={"20%"} maw={"20%"} src={collage} />
    </Group>
  );
}
