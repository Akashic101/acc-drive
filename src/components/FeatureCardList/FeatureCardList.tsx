import { Center, SimpleGrid } from "@mantine/core";
import {
  IconAppWindow,
  IconBadgeVr,
  IconEyeExclamation,
  IconFileSpreadsheet,
  IconFlagExclamation,
  IconHeadset,
  IconRadar,
  IconTournament,
} from "@tabler/icons-react";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import accDrive1 from "../../media/hoechstleistung-min.png";
import I18n from "../../i18n.js";
import { useTranslation } from "react-i18next";

export function FeatureCardList() {
  const { t } = useTranslation("translations");
  return (
    <Center>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing="xs"
        verticalSpacing="xl"
      >
        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature1.title")}
            featureText={I18n.t("features.feature1.subtitle")}
            longText={I18n.t("features.feature1.description")}
            modalText={I18n.t("features.feature1.modalText")}
            icon={<IconHeadset size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>
        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature2.title")}
            featureText={I18n.t("features.feature2.subtitle")}
            longText={I18n.t("features.feature2.description")}
            modalText={I18n.t("features.feature2.modalText")}
            icon={<IconFileSpreadsheet size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>
        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature3.title")}
            featureText={I18n.t("features.feature3.subtitle")}
            longText={I18n.t("features.feature3.description")}
            modalText={I18n.t("features.feature3.modalText")}
            icon={<IconEyeExclamation size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>
        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature4.title")}
            featureText={I18n.t("features.feature4.subtitle")}
            longText={I18n.t("features.feature4.description")}
            modalText={I18n.t("features.feature4.modalText")}
            icon={<IconTournament size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>
        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature5.title")}
            featureText={I18n.t("features.feature5.subtitle")}
            longText={I18n.t("features.feature5.description")}
            modalText={I18n.t("features.feature5.modalText")}
            icon={<IconRadar size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>

        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature6.title")}
            featureText={I18n.t("features.feature6.subtitle")}
            longText={I18n.t("features.feature6.description")}
            modalText={I18n.t("features.feature6.modalText")}
            icon={<IconFlagExclamation size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>
        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature7.title")}
            featureText={I18n.t("features.feature7.subtitle")}
            longText={I18n.t("features.feature7.description")}
            modalText={I18n.t("features.feature7.modalText")}
            icon={<IconAppWindow size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>
        <Center>
          <FeatureCard
            featureName={I18n.t("features.feature8.title")}
            featureText={I18n.t("features.feature8.subtitle")}
            longText={I18n.t("features.feature8.description")}
            modalText={I18n.t("features.feature8.modalText")}
            icon={<IconBadgeVr size="50" color={"#66ae3f"} />}
            image={accDrive1}
          />
        </Center>
      </SimpleGrid>
    </Center>
  );
}
