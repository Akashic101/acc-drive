import "./App.css";
import "@mantine/core/styles.css";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { HeroTitle } from "./components/HeroTitle";
import { CTABanner } from "./components/CTABanner";
import { Space } from "@mantine/core";
import { FeatureCardList } from "./components/FeatureCardList";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { CTAVideoBanner } from "./components/CTAVideoBanner";

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <HeaderMegaMenu />
        <HeroTitle />
        <Space h="xl" />
        <CTABanner />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <FeatureCardList />
        <CTAVideoBanner />
      </I18nextProvider>
    </div>
  );
}

export default App;
