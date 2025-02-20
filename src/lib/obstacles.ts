import { Categories } from "./enum";

export const obstacleMapping: { [key: string]: Categories | Categories[] } = {
  "I'm not good enough.": Categories.Ambitious,
  "I don't prioritize the important things close to me enough.":
    Categories.HeartAndHome,
  "I don't love myself enough.": Categories.SelfLove,
  "I fear not being accepted.": Categories.SoulfulImpact,
  "I struggle with time management.": [
    Categories.Ambitious,
    Categories.HeartAndHome,
  ],
  "I lack self-confidence.": [Categories.Ambitious, Categories.SelfLove],
  "I haven't found enough inspiration.": [
    Categories.Ambitious,
    Categories.SoulfulImpact,
  ],
  "I'm too driven, to the point of losing sight of the journey.": [
    Categories.HeartAndHome,
    Categories.SelfLove,
  ],
  "I feel pressured by society.": [
    Categories.HeartAndHome,
    Categories.SoulfulImpact,
  ],
  "I feel overwhelmed by a world that moves too fast.": [
    Categories.SelfLove,
    Categories.SoulfulImpact,
  ],
  ยังเก่งไม่พอ: Categories.Ambitious,
  ไม่ให้ความสำคัญกับสิ่งใกล้ตัวมากพอ: Categories.HeartAndHome,
  รักตัวเองไม่พอ: Categories.SelfLove,
  กลัวการไม่ถูกยอมรับ: Categories.SoulfulImpact,
  จัดสรรเวลาได้ไม่ดี: [Categories.Ambitious, Categories.HeartAndHome],
  เชื่อมั่นในตัวเองไม่มากพอ: [Categories.Ambitious, Categories.SelfLove],
  ยังไม่มีแรงบันดาลใจที่มากพอ: [Categories.Ambitious, Categories.SoulfulImpact],
  "มุ่งมั่นเกินไป จนหลงลืมระหว่างทาง": [
    Categories.HeartAndHome,
    Categories.SelfLove,
  ],
  ความกดดันจากสังคม: [Categories.HeartAndHome, Categories.SoulfulImpact],
  โลกที่หมุนเร็วเกินไป: [Categories.SelfLove, Categories.SoulfulImpact],
};
