type SortedWeight = {
    category: string;
    subConcept: string;
    weight: number;
  };
  
  const Chapter = (sortedWeights: SortedWeight[]): string => {
    // Separate items into Motivation and Obstacle (case-insensitive)
    const motivationWeights = sortedWeights
      .filter(item => item.category.toLowerCase() === "motivation")
      .sort((a, b) => b.weight - a.weight);
  
    const obstacleWeights = sortedWeights
      .filter(item => item.category.toLowerCase() === "obstacle")
      .sort((a, b) => b.weight - a.weight);
  
    // If there is no data for either category, default to "กลาง" (Mid)
    if (motivationWeights.length === 0 && obstacleWeights.length === 0) {
      return "กลาง";
    }
    
    // Use defaults if one of the arrays is empty
    const topMotivation = motivationWeights[0] || { subConcept: "", weight: 0 };
    const topObstacle = obstacleWeights[0] || { subConcept: "", weight: 0 };
  
    // Determine stage based on weighted scores:
    // 1. If top obstacle weight > top motivation weight, then it's "ต้น" (Early)
    if (topObstacle.weight > topMotivation.weight) {
      return "ต้น";
    } else {
      // 2. If the top Motivation and Obstacle share the same subConcept, then it's "บานสะพรั่ง" (Full Bloom)
      if (topMotivation.subConcept.trim() === topObstacle.subConcept.trim()) {
        return "บานสะพรั่ง";
      } else {
        // 3. Otherwise, it's "กลาง" (Mid)
        return "กลาง";
      }
    }
  };
  
  export default Chapter;
  