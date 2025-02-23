import { Category, SeasonsChapter } from "./enum";
import { WeightedSubConcept } from "./types";

const ChapterDetermination = (
  sortedWeights: WeightedSubConcept[]
): SeasonsChapter => {
  const motivationWeights = sortedWeights.filter(
    (item) => item.category === Category.Motivation
  );
  const obstacleWeights = sortedWeights.filter(
    (item) => item.category === Category.Obstacle
  );

  if (motivationWeights.length === 0 && obstacleWeights.length === 0) {
    return SeasonsChapter.Middle;
  }

  const topMotivation = motivationWeights[0] || { subConcept: "", weight: 0 };
  const topObstacle = obstacleWeights[0] || { subConcept: "", weight: 0 };

  if (topObstacle.weight > topMotivation.weight) {
    return SeasonsChapter.Start;
  } else if (
    topMotivation.subConcept.trim() === topObstacle.subConcept.trim()
  ) {
    return SeasonsChapter.End;
  } else {
    return SeasonsChapter.Middle;
  }
};

export default ChapterDetermination;
