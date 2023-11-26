import { useEffect, useState } from "react";
import {
  Text,
  Menu,
  Image,
  Group,
  Center,
  SegmentedControl,
  Container,
  SegmentedControlItem,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./LanguagePicker.module.css";
import ReactCountryFlag from "react-country-flag";
import i18n from "../../i18n";
import { changeLanguage } from "i18next";

const possibleLanguages: SegmentedControlItem[] = [
  {
    label: (
      <Container>
        <ReactCountryFlag countryCode="gb" svg />
        <Text>English</Text>
      </Container>
    ),
    value: "gb",
  },
  {
    label: (
      <Container>
        <ReactCountryFlag countryCode="de" svg />
        <Text>Deutsch</Text>
      </Container>
    ),
    value: "de",
  },
];

export function LanguagePickerMobile() {
  const [selected, setSelected] = useState(possibleLanguages[0]);
  const [selectedLanguage, setSelectedLanguage] = useState("gb");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    changeLanguage(value);
  };

  const items = possibleLanguages.map((item) => (
    <Menu.Item
      leftSection={<ReactCountryFlag countryCode={item.value} svg />}
      onClick={() => setSelected(item)}
      key={item.value}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Center>
      <SegmentedControl
        data={possibleLanguages}
        value={selectedLanguage}
        onChange={handleLanguageChange}
      />
    </Center>
  );
}
