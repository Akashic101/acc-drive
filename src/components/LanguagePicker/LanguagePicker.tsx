import { useEffect, useState } from "react";
import { UnstyledButton, Menu, Image, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./LanguagePicker.module.css";
import ReactCountryFlag from "react-country-flag";
import i18n from "../../i18n";
import { changeLanguage } from "i18next";

const data = [
  { label: "English", code: "gb" },
  { label: "Deutsch", code: "de" },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  useEffect(() => {
    const handleChangeLanguage = async () => {
      changeLanguage(selected.code);
    };

    handleChangeLanguage();
  }, [selected.code, i18n]);

  const items = data.map((item) => (
    <Menu.Item
      leftSection={<ReactCountryFlag countryCode={item.code} svg />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <ReactCountryFlag
              countryCode={selected.code}
              svg
              width={22}
              height={22}
            />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
