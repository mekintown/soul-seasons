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
} as const;
