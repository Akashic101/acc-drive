import { Group, Title, Image } from "@mantine/core";
import logo from "../../media/drive-logo.png";

import classes from "./Logo.module.css";

export default function Logo(): React.JSX.Element {
  return (
    <Group className={classes.logo}>
      <Image radius="md" h={40} src={logo} />
      <Title className={classes["franklin-gothic-bold"]} order={3}>
        ACC DRIVE
      </Title>
    </Group>
  );
}
