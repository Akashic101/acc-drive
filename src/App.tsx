import "./App.css";
import "@mantine/core/styles.css";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { HeroTitle } from "./components/HeroTitle";
import { CTABanner } from "./components/CTABanner";
import { Space } from "@mantine/core";
import { FeatureCardList } from "./components/FeatureCardList";

function App() {
  return (
    <div className="App">
      <HeaderMegaMenu />
      <HeroTitle />
      <Space h="xl" />
      <CTABanner />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <FeatureCardList />
    </div>
  );
}

export default App;
