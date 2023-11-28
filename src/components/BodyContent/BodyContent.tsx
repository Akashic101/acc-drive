import { Space } from "@mantine/core";
import { CTABanner } from "../CTABanner/CTABanner";
import { CTABannerSingle } from "../CTABannerSingle/CTABannerSingle";
import { CTAVideoBanner } from "../CTAVideoBanner/CTAVideoBanner";
import { CommunityReviews } from "../CommunityReviews/CommunityReviews";
import { FeatureCardList } from "../FeatureCardList/FeatureCardList";
import { FooterLinks } from "../FooterLinks/FooterLinks";
import { HeroTitle } from "../HeroTitle/HeroTitle";

export default function BodyContent(): React.JSX.Element {
  return (
    <>
      <HeroTitle />
      <Space h="xl" id="pricing" />
      <CTABanner />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" id="features" />
      <Space h="xl" />
      <FeatureCardList />
      <Space h="xl" />
      <CTAVideoBanner />
      <Space h="xl" />
      <Space h="xl" id="community" />
      <Space h="xl" />
      <CommunityReviews />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <CTABannerSingle />
      <Space h="xl" />
      <Space h="xl" />
      <FooterLinks />
    </>
  );
}
