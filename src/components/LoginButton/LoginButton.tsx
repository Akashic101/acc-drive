import classes from "./LoginButton.module.css";
import { ActionIcon, Center, Container } from "@mantine/core";
import { IconBrandSteam } from "@tabler/icons-react";

export default function LoginButton(): React.JSX.Element {
  return (
    <Center>
      <a href="home" className={classes.steambutton}>
        <span>Login</span>
        <Container className={classes.icon}>
          <Center>
            <ActionIcon
              size={42}
              variant="transparent"
              color="rgba(255, 255, 255, 1)"
            >
              <IconBrandSteam />
            </ActionIcon>
          </Center>
        </Container>
      </a>
    </Center>
  );
}
