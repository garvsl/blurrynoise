import { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

export default function Wave({
  height,
  cardRef,
  audio,
  setDuration,
  setCurrentTime,
  setLoading,
  children,
}: any) {
  const effectCalled = useRef(false);
  const waveSurferRef: any = useRef();

  const waveSurfer: any = (ref: any) => ({
    container: ref,
    waveColor: "white",
    progressColor: "black",
    barWidth: 2,
    responsive: true,
    height: height,
    normalize: true,
    backend: "WebAudio",
  });

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.round(seconds) % 60;
    const paddedSeconds = `0${secondsRemainder}`.slice(-2);
    return `${minutes}:${paddedSeconds}`;
  };

  useEffect(() => {
    if (effectCalled.current) return;
    if (audio) {
      const options = waveSurfer(cardRef.current);
      waveSurferRef.current = WaveSurfer.create(options);
      waveSurferRef.current.loadBlob(audio.blob);

      waveSurferRef.current.on("interaction", () => {
        waveSurferRef.current.playPause();
      });
      waveSurferRef.current.on("decode", (duration: any) =>
        setDuration(formatTime(duration))
      );
      waveSurferRef.current.on("timeupdate", (currentTime: any) =>
        setCurrentTime(formatTime(currentTime))
      );
      setTimeout(() => {
        setLoading(false);
      }, 500);
      effectCalled.current = true;
    }
  }, [audio]);
  return <>{children}</>;
}
