import { UnstyledButton, Group, Avatar, Text, rem, Menu } from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,

  IconUser,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

interface UserDisplayProps {
  username: string;
  icon: string;
}

export function UserDisplay({ username, icon }: UserDisplayProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

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
            <Avatar src={icon} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {username}
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
        <Menu.Item
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
