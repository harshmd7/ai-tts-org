import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-views";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Text To Speech",
  description: "",
};

function page() {
  return (
    <TextToSpeechView/>
  )
}

export default page