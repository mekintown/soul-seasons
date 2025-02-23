"use client";

import { ambientPageMap, scenePageMap, soundPageMap } from "@/lib/sounds";
import { createRef, useEffect, useState } from "react";
import ReactHowler from "react-howler";
import AudioPlayer from "./audio-player";
import { usePathname } from "@/i18n/routing";

const Sounds = () => {
  const path = usePathname();
  const page = path.split("/")[1];
  const defaultBackingTrackVolume = 0.75;
  const defaultSoundEffectVolume = 0.3;
  const defaultAmbientTrackVolume = 0.9;
  const scene = page
    .split("-")
    .slice(0, 2)
    .join("-") as keyof typeof scenePageMap;

  const [backingTrackSound, setBackingTrackSound] = useState<string>();
  const [backingTrackVolume, setBackingTrackVolume] = useState<number>(
    defaultBackingTrackVolume
  );
  const backingTrackRef = createRef<ReactHowler>();
  const soundEffectRef = createRef<ReactHowler>();
  const ambientTrackRef = createRef<ReactHowler>();
  const [soundEffect, setSoundEffect] = useState<{
    sound: string;
    loop?: boolean;
    volume?: number;
    replay?: boolean;
  }>();
  const [ambientTrack, setAmbientTrack] = useState<{
    sound: string;
    volume?: number;
  }>();

  const fadeDuration = 250;

  useEffect(() => {
    const nextSound = scenePageMap[scene];

    if (nextSound !== backingTrackSound) {
      backingTrackRef.current?.howler.fade(backingTrackVolume, 0, fadeDuration);
      setTimeout(() => {
        setBackingTrackSound(nextSound);
      }, fadeDuration);
    }
  }, [scene]);

  useEffect(() => {
    let nextSoundEffect: typeof soundEffect;
    let nextBackgroundVolume: number | undefined;
    let nextAmbientTrack: typeof ambientTrack;
    if (page in soundPageMap) {
      nextSoundEffect =
        soundPageMap[page as keyof typeof soundPageMap]?.soundEffect;
      nextBackgroundVolume =
        soundPageMap[page as keyof typeof soundPageMap]?.backgroundVolume;
    }
    if (page in ambientPageMap) {
      nextAmbientTrack = ambientPageMap[page as keyof typeof ambientPageMap];
    }
    if (nextSoundEffect?.sound !== soundEffect?.sound) {
      if (soundEffectRef.current?.howler.playing()) {
        soundEffectRef.current?.howler.fade(
          soundEffectRef.current?.howler.volume() ?? defaultSoundEffectVolume,
          0,
          fadeDuration
        );
        setTimeout(() => {
          setSoundEffect(nextSoundEffect);
        }, fadeDuration);
      } else {
        setSoundEffect(nextSoundEffect);
      }
    }
    if (nextAmbientTrack?.sound !== ambientTrack?.sound) {
      if (ambientTrackRef.current?.howler.playing()) {
        ambientTrackRef.current?.howler.fade(
          ambientTrackRef.current?.howler.volume() ?? defaultAmbientTrackVolume,
          0,
          fadeDuration
        );
        setTimeout(() => {
          setAmbientTrack(nextAmbientTrack);
        }, fadeDuration);
      } else {
        setAmbientTrack(nextAmbientTrack);
      }
    }

    if (
      nextSoundEffect?.sound === soundEffect?.sound &&
      nextSoundEffect?.replay
    ) {
      soundEffectRef.current?.howler.stop();
      soundEffectRef.current?.howler.play();
    }

    if (
      !!nextBackgroundVolume ||
      backingTrackRef.current?.howler.volume() !== defaultBackingTrackVolume
    ) {
      const finalVolume = nextBackgroundVolume ?? defaultBackingTrackVolume;
      backingTrackRef.current?.howler.fade(
        backingTrackVolume,
        finalVolume,
        fadeDuration
      );
      setTimeout(() => {
        setBackingTrackVolume(finalVolume);
      }, fadeDuration);
    }
  }, [page]);

  return (
    <>
      {backingTrackSound && (
        <AudioPlayer
          src={backingTrackSound}
          volume={backingTrackVolume}
          loop
          preload
          ref={backingTrackRef}
        />
      )}
      {soundEffect && (
        <AudioPlayer
          key={soundEffect.sound}
          src={soundEffect.sound}
          loop={soundEffect.loop}
          volume={soundEffect.volume ?? defaultSoundEffectVolume}
          ref={soundEffectRef}
        />
      )}
      {ambientTrack && (
        <AudioPlayer
          key={ambientTrack.sound}
          src={ambientTrack.sound}
          loop
          preload
          volume={ambientTrack.volume ?? defaultAmbientTrackVolume}
          ref={ambientTrackRef}
        />
      )}
    </>
  );
};

export default Sounds;
