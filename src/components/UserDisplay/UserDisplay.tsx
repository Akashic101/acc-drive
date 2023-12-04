import { UnstyledButton, Group, Avatar, Text, rem, Menu } from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,

  IconUser,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
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
  photos: Photo[];
}

interface Photo {
  value: string;
}

export function UserDisplay() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);


  useEffect(() => {
    // Check if 'userData' is stored in session storage
    const storedUserDataString = sessionStorage.getItem('userData');

    if (storedUserDataString) {
      // If found, parse and set the stored userData
      const storedUserData: UserData = JSON.parse(storedUserDataString);
      setUserData(storedUserData);
    } else {
      // Handle the case where userData is not found in session storage
      console.log('User data not found in session storage.');
    }
  }, []);

  const handleLogout = () => {
    // Clear 'userData' from session storage
    sessionStorage.removeItem('userData');

    // Reset the component state
    setUserData(null);
  };

  return (
    <Menu
      width={170}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton>
          <Group gap={7}>
            <Avatar src={userData?.photos[0].value} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {userData?.displayName}
            </Text>
            <IconChevronDown
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          color="blue"
          leftSection={
            <IconUser
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Account
        </Menu.Item>
        <Menu.Item onClick={handleLogout}
          color="red"
          leftSection={
            <IconLogout
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
