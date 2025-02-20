import { Categories } from "./enum";
type SortedWeight = {
  category: Category;
  subConcept: Categories;
  weight: number;
};
enum Category{
  Motivation = "Motivation",
  Obstacle = "Obstacle",
}


const Season = (sortedWeights: SortedWeight[]) => {
  // Get the top two sorted weights.
  const top = sortedWeights.slice(0, 2);
  // Map to the subConcept values and trim any extra whitespace.
  const seasonArray = top.map(item => item.subConcept.trim());

  // Use switch(true) to check for combinations regardless of order.
  switch (true) {
    case seasonArray.includes(Categories.Ambitious) && seasonArray.includes(Categories.HeartAndHome):
      return "Heart & Home";
    case seasonArray.includes(Categories.Ambitious) && seasonArray.includes(Categories.SelfLove):
      return "Trophies and Triumphs";
    case seasonArray.includes(Categories.Ambitious) && seasonArray.includes(Categories.SoulfulImpact):
      return "Inspiring Flames";
    case seasonArray.includes(Categories.HeartAndHome) && seasonArray.includes(Categories.SelfLove):
      return "A Refilled Heart";
    case seasonArray.includes(Categories.HeartAndHome) && seasonArray.includes(Categories.SoulfulImpact):
      return "Ribbons and Paper Boxes";
    case seasonArray.includes(Categories.SelfLove) && seasonArray.includes(Categories.SoulfulImpact):
      return "Life’s Canvas";
    default:
      return null;
  }
};

export default Season;
