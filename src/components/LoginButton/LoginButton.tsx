import classes from "./LoginButton.module.css";
import { ActionIcon, Center, Container } from "@mantine/core";
import { IconBrandSteam } from "@tabler/icons-react";
import queryString from 'query-string';
import { useEffect, useState } from "react";
import { UserDisplay } from "../UserDisplay/UserDisplay";

interface UserData {
  provider: string;
  _json: {
    steamid: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    commentpermission: number;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    personastate: number;
    realname: string;
    primaryclanid: string;
    timecreated: number;
    personastateflags: number;
    loccountrycode: string;
  };
  id: string;
  displayName: string;
  photos: Photo[];
}

interface Photo {
  value: string;
}


export default function LoginButton(): React.JSX.Element {
  const [userData, setUserData] = useState<UserData>()
  const handleSteamLogin = async () => {
    try {
      // Redirect the user to the Steam authentication page on your server
      window.location.href = "http://localhost:8080/auth/steam";
    } catch (error) {
      console.error("Error initiating Steam login:", error);
    }
  };

  useEffect(() => {
    // Check if 'userData' is stored in session storage
    const storedUserDataString = sessionStorage.getItem('userData');

    if (storedUserDataString) {
      // If found, parse and set the stored userData
      const storedUserData: UserData = JSON.parse(storedUserDataString);
      setUserData(storedUserData);
    } else {
      // If not found, get the URL search parameters
      const params = queryString.parse(window.location.search);

      // Check if 'userData' parameter exists
      if ('userData' in params) {
        // Extract and parse the 'userData' parameter
        const userDataString = params.userData as string;
        const parsedUserData: UserData = JSON.parse(decodeURIComponent(userDataString));

        // Set the parsed userData in the component state
        setUserData(parsedUserData);

        // Save the parsed userData to session storage
        sessionStorage.setItem('userData', JSON.stringify(parsedUserData));
      }
    }
  }, []);

  return (
    <Center>
       {sessionStorage.getItem('userData') ? (
        <UserDisplay/>
      ) : (
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
      </a>)}
    </Center>
  );
}
