import { useEffect, useState } from "react";
import { UnstyledButton, Menu, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./LanguagePicker.module.css";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const data = [
  { label: "English", code: "gb" },
  { label: "Deutsch", code: "de" },
];

export function LanguagePicker() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<ReactCountryFlag countryCode={item.code} svg />}
      onClick={() => {
        setSelected(item);
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  useEffect(() => {
    const handleChangeLanguage = async () => {
      changeLanguage(selected.code);
    };

    handleChangeLanguage();
  }, [selected.code, i18n]);

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
            <ReactCountryFlag countryCode={selected.code} svg />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
