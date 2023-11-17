import "./App.css";
import "@mantine/core/styles.css";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { HeroTitle } from "./components/HeroTitle";
import { CTABanner } from "./components/CTABanner";
import { SimpleGrid, Group, Space } from "@mantine/core";

function App() {
  return (
    <div className="App">
      <HeaderMegaMenu />
      <HeroTitle />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <CTABanner />
    </div>
  );
}

export default App;
