import { Categories } from "./enum";
export const motivationMap: { [key: string]: Categories } = {
  "Career/Work": Categories.Ambitious,
  Family: Categories.HeartAndHome,
  "Relationship/Friends": Categories.HeartAndHome,
  "Sharing/Contributions": Categories.SoulfulImpact,
  "Self-Development": Categories.SelfLove,
  "Finance/Money": Categories.Ambitious,
  Health: Categories.SelfLove,
  Spiritual: Categories.SoulfulImpact,
};
