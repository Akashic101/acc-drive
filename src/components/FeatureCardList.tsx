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

export function FeatureCardList() {
  return (
    <Container fluid>
      <Group className={classes.featureCardGroup} justify="space-between">
        <FeatureCard
          featureName="Race Engineer"
          featureText="The most important data at hand"
          longText="The Race Engineer helps you get the right fuel and PSI into your car by looking at your data. Basically like the Session Info Page but local-only"
          icon={<IconHeadset size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName="Telemetry"
          featureText="Additional Info on your past sessions"
          longText="Revel in detailed lap specifics such as time, top- and average-speed, with the additional bonus of TC/ABS intervention stats. Stay on top of your game with active assists and overall stint details showcasing your best lap"
          icon={<IconFileSpreadsheet size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName="Spotting"
          featureText="For a better overview of the race"
          longText="The Spotting page gives you an easier time keeping an overview of the race. You can see everyone's last and fastest times, how often they pitted, who is currently driving and more"
          icon={<IconEyeExclamation size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName="Community"
          featureText="Sharing and recieving your best laps to help each other out"
          longText="Asode from adding each other as friends via ACC DRIVE, comparing yourself to faster times within the community is now possible as well! After completing a valid lap, your telemetry data is uploaded to our secure server."
          icon={<IconTournament size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
      </Group>
      <Group className={classes.featureCardGroup} justify="space-between">
        <FeatureCard
          featureName="Radar"
          featureText="Perfect for close racing"
          longText="Shows the position of other cars around you. Can be customized for the distance ahead, behind and next to you."
          icon={<IconRadar size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName="Yellow Flags"
          featureText="The most important data at hand"
          longText="This is an improvement over the in-game yellow flag system. It adds the distance to an accident, the position and rotation of the crashed car into one system that warns you efficiently before the game does."
          icon={<IconFlagExclamation size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName="Full Tyre & Damage App"
          featureText="All the data about your car you will need"
          longText="This feature shows you the actual values based on the performance of your tires/brakes instead of some random values Kunos is presenting. It also features a damage-model when you take damage."
          icon={<IconAppWindow size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
        <FeatureCard
          featureName="VR Support"
          featureText="ACC DRIVE fully works in VR"
          longText="When setting up the App you can decide to always position ACC DRIVE in front to put it infront of all other applications."
          icon={<IconBadgeVr size="50" color={"#66ae3f"} />}
          image={accDrive1}
        />
      </Group>
    </Container>
  );
}
