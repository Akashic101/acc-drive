import { useEffect, useState } from "react";
import {
  Text,
  SegmentedControl,
  Container,
  SegmentedControlItem,
  Center,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import ReactCountryFlag from "react-country-flag";
import i18n from "../../i18n";
import { changeLanguage } from "i18next";

export function LanguagePickerMobile() {
  const [value, setValue] = useState(i18n.languages[0]);

  useEffect(() => {
    changeLanguage(value);
  }, [value]);

  return (
    <Center>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={[
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
        ]}
      />
    </Center>
  );
}
