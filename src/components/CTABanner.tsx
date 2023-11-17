import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Space,
  Image,
  AspectRatio,
  Center,
  Stack,
} from "@mantine/core";
import classes from "./CTABanner.module.css";
import collage from "../media/drive-collage.png";

export function CTABanner() {
  return (
    <Container size="responsive">
      <Grid justify="space-between">
        <Grid.Col className={classes.alignedCenter} span={6}>
          <Stack align="center">
            <Center>
              <Container>
                <Title className={classes.title}>
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "green", to: "#85d46c" }}
                  >
                    GET ACC DRIVE NOW!
                  </Text>{" "}
                  <br></br>
                </Title>
                <Text size="xl" fw={500}>
                  Get your lifetime license for only 25€
                </Text>
                <Text size="sm">
                  Your ACC DRIVE-license will be linked to your Steam-Account.{" "}
                </Text>
                <Text size="sm">
                  If you want to change the linked account you can contact us
                  via Discord.
                </Text>
                <Space h={"lg"} />
                <Button color={"#ffc438"} fullWidth>
                  Checkout with Paypal
                </Button>
              </Container>
            </Center>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <AspectRatio ratio={1080 / 720} w={"50%"}>
              <img src={collage} />
            </AspectRatio>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
