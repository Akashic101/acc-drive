import { Container, Group } from "@mantine/core";
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
import { FeatureCard } from "./FeatureCard";
import classes from "./FeatureCardList.module.css";
import accDrive1 from "../media/acc_1.jpg";
import I18n from "../i18n.js";

export function FeatureCardList() {
  return (
    <Container fluid>
      <Group className={classes.featureCardGroup} justify="space-between">
        <FeatureCard
          featureName={I18n.t("features.feature1.title")}
          featureText={I18n.t("features.feature1.subtitle")}
          longText={I18n.t("features.feature1.description")}
          icon={<IconHeadset size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName={I18n.t("features.feature2.title")}
          featureText={I18n.t("features.feature2.subtitle")}
          longText={I18n.t("features.feature2.description")}
          icon={<IconFileSpreadsheet size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName={I18n.t("features.feature3.title")}
          featureText={I18n.t("features.feature3.subtitle")}
          longText={I18n.t("features.feature3.description")}
          icon={<IconEyeExclamation size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName={I18n.t("features.feature4.title")}
          featureText={I18n.t("features.feature4.subtitle")}
          longText={I18n.t("features.feature4.description")}
          icon={<IconTournament size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
      </Group>
      <Group className={classes.featureCardGroup} justify="space-between">
        <FeatureCard
          featureName={I18n.t("features.feature5.title")}
          featureText={I18n.t("features.feature5.subtitle")}
          longText={I18n.t("features.feature5.description")}
          icon={<IconRadar size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName={I18n.t("features.feature6.title")}
          featureText={I18n.t("features.feature6.subtitle")}
          longText={I18n.t("features.feature6.description")}
          icon={<IconFlagExclamation size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName={I18n.t("features.feature7.title")}
          featureText={I18n.t("features.feature7.subtitle")}
          longText={I18n.t("features.feature7.description")}
          icon={<IconAppWindow size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName={I18n.t("features.feature8.title")}
          featureText={I18n.t("features.feature8.subtitle")}
          longText={I18n.t("features.feature8.description")}
          icon={<IconBadgeVr size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
      </Group>
    </Container>
  );
}
