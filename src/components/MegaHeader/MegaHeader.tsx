import { Group, Text, Image } from "@mantine/core";
import logo from "../../media/drive-logo.png";

import classes from "./Logo.module.css";

export default function MegaHeader(): React.JSX.Element {
  return (
    <Group className={classes.logo}>
      <Image radius="md" h={40} src={logo} />
      <Text fs="italic" size="xl">
        ACC DRIVE
      </Text>
    </Group>
  );
}
