import { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

export default function Wave({
  height,
  cardRef,
  audio,
  setDuration,
  setLoading,
  children,
}: any) {
  const effectCalled = useRef(false);
  const waveSurferRef: any = useRef();

  const waveSurfer: any = (ref: any) => ({
    container: ref,
    waveColor: "#fff",
    progressColor: "#0178ff",
    cursorColor: "transparent",
    responsive: true,
    // width: ref.scrollWidth,
    height: height,
    normalize: true,
    backend: "WebAudio",
  });

  useEffect(() => {
    if (effectCalled.current) return;
    if (audio) {
      const options = waveSurfer(cardRef.current);
      waveSurferRef.current = WaveSurfer.create(options);
      waveSurferRef.current.loadBlob(audio.blob);

      waveSurferRef.current.on("ready", () => {
        setDuration(`${Math.round(waveSurferRef.current.getDuration())}s`);
      });
      setTimeout(() => {
        setLoading(false);
      }, 500);
      effectCalled.current = true;
    }
  }, [audio]);
  return <>{children}</>;
}
