import classes from "./LoginButton.module.css";
import { ActionIcon, Center, Container } from "@mantine/core";
import { IconBrandSteam } from "@tabler/icons-react";

export default function LoginButton(): React.JSX.Element {
  const handleSteamLogin = async () => {
    try {
      // Redirect the user to the Steam authentication page on your server
      window.location.href = "http://localhost:8080/auth/steam";
    } catch (error) {
      console.error("Error initiating Steam login:", error);
    }
  };

  return (
    <Center>
      <a href="#" className={classes.steambutton} onClick={handleSteamLogin}>
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
