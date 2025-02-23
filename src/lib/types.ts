export type Season =
  | "Inspiring Flames"
  | "Life’s Canvas"
  | "Heart & Home"
  | "Ribbons and Paper Boxes"
  | "Trophies and Triumphs"
  | "A Refilled Heart";

export type SeasonsChapter = "start" | "middle" | "end";

export const chapterMap: Record<SeasonsChapter, string> = {
  start: "1",
  middle: "2",
  end: "3",
};

export const seasonMap: Record<Season, string> = {
  "Inspiring Flames": "1",
  "Life’s Canvas": "2",
  "Heart & Home": "3",
  "Ribbons and Paper Boxes": "4",
  "Trophies and Triumphs": "5",
  "A Refilled Heart": "6",
};
