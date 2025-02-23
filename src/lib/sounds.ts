export const scenePageMap = {
  "0": "/sound/track/0.mp3",
  // "1-1": "/sound/bgm/B3 - Nostalgia.wav",
  // "1-2": "/sound/bgm/B3 - Nostalgia.wav",
} as const;

export const soundPageMap: Record<
  string,
  {
    soundEffect?: {
      sound: string;
      loop?: boolean;
      volume?: number;
      replay?: boolean;
    };
    backgroundVolume?: number;
  }
> = {
  "1-3-1": {
    soundEffect: {
      sound: "/sound/effect/E8 - Autumn เสียงเดิน.wav",
      volume: 1,
    },
  },
  "1-3-2": {
    soundEffect: {
      sound: "/sound/effect/E8 - Autumn เสียงเดิน.wav",
      volume: 1,
      replay: true,
    },
  },
  "1-4-5": {
    soundEffect: {
      sound: "/sound/effect/E9 - Autumn book flip.wav",
      volume: 1,
    },
  },
  "1-4-9": {
    soundEffect: {
      sound: "/sound/effect/E9 - Autumn book flip.wav",
      volume: 1,
    },
  },
  "2-2-4": {
    soundEffect: {
      sound: "/sound/effect/E10 - Winter Sparkle.wav",
    },
  },
  "2-3-1": {
    soundEffect: {
      sound: "/sound/effect/E10 - Winter Sparkle.wav",
    },
  },
  "3-3-7": {
    soundEffect: {
      sound: "/sound/effect/E14 - ร่มตก.wav",
    },
  },
  "4-1-1": {
    soundEffect: {
      sound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
      volume: 1,
    },
  },
  "5-2-4": {
    soundEffect: {
      sound: "/sound/effect/E15 - Summer_TreeShaking.wav",
      volume: 0.1,
    },
  },
  "5-2-7": {
    soundEffect: {
      sound: "/sound/effect/E16 - Summer_FruitFall.wav",
      volume: 0.1,
    },
  },
} as const;

export const ambientPageMap: Record<
  string,
  {
    sound: string;
    volume?: number;
  }
> = {
  "0-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-2": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-3-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-3-2": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-4-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-4-2": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-4-3": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-5": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "1-1-3": {
    sound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-2-1": {
    sound: "/sound/effect/E6 - Wind.mp3",
    volume: 1,
  },
  "1-2-2": {
    sound: "/sound/effect/E6 - Wind.mp3",
    volume: 1,
  },
  "1-2-4": {
    sound: "/sound/effect/E6 - Wind.mp3",
    volume: 1,
  },
  "1-2-5": {
    sound: "/sound/effect/E6 - Wind.mp3",
    volume: 1,
  },
  "3-1-1": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-2": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-3": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-4": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-5": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-2-2": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-2-3": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-2-4": {
    sound: "/sound/effect/E12 - ฝนค่อยๆดัง.wav",
  },
  "3-2-6": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-7": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-10": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-11": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-12": {
    sound: "/sound/effect/E12 - ฝนค่อยๆดัง.wav",
  },
  "3-3-1": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-2": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-3": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-4": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-5": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-6": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-7": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "4-1-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
} as const;
