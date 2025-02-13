// available colors: blue, yellow, purple, green, red, orange, pink, cyan
export const motivationColorMapping = (motivationName: string) => {
  switch (motivationName) {
    case "Family":
      return "blue";
    case "Finance/Money":
      return "yellow";
    case "Spirituality/Religion":
      return "purple";
    case "Health":
      return "green";
    case "Relationships/Friends":
      return "red";
    case "Sharing/Contribution":
      return "orange";
    case "Career/Work":
      return "pink";
    case "Self-Development":
      return "cyan";
    default:
      return "blue";
  }
};
