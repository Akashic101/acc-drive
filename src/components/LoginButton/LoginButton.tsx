import classes from "./LoginButton.module.css";
import { ActionIcon, Center, Container } from "@mantine/core";
import { IconBrandSteam } from "@tabler/icons-react";
import queryString from 'query-string';
import { useEffect, useState } from "react";

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
  photos: Array<{ value: string }>;
}


export default function LoginButton(): React.JSX.Element {
  const [loggedIn, setLoggedIn] = useState(false)
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
    // Get the URL search parameters
    const params = queryString.parse(window.location.search);

    // Check if 'userData' parameter exists
    if ('userData' in params) {
      // Extract and parse the 'userData' parameter
      const userDataString = params.userData as string;
      const userData = JSON.parse(decodeURIComponent(userDataString));
      setLoggedIn(true)
      setUserData(userData);

      // Print the parsed userData
      console.log(userData);

      // Now you can use 'userData' in your component as needed
      // For example, you can set it in the component state or display it in the render method
    } else {
      console.log('userData parameter not found in the URL');
    }
  }, []);

  return (
    <Center>
       {userData ? (
        <div>
          <p>{userData.displayName}!</p>
        </div>
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
      </a>
      )}
    </Center>
  );
}
