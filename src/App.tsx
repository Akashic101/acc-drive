import "./App.css";
import "@mantine/core/styles.css";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu/HeaderMegaMenu";
import { HeroTitle } from "./components/HeroTitle/HeroTitle";
import { CTABanner } from "./components/CTABanner/CTABanner";
import { Space } from "@mantine/core";
import { FeatureCardList } from "./components/FeatureCardList/FeatureCardList";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { CTAVideoBanner } from "./components/CTAVideoBanner/CTAVideoBanner";
import { CommunityReviews } from "./components/CommunityReviews/CommunityReviews";
import { CTABannerSingle } from "./components/CTABannerSingle/CTABannerSingle";
import { FooterLinks } from "./components/FooterLinks/FooterLinks";

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
        <Space h="xl" />
        <CTAVideoBanner />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <CommunityReviews />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <CTABannerSingle />
        <Space h="xl" />
        <Space h="xl" />
      </I18nextProvider>
      <FooterLinks />
    </div>
  );
}

export default App;
