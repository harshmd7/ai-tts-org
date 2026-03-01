import { TextToSpeechLayout } from "@/features/text-to-speech/views/text-tospeech-layout";

export default function Layout({ 
  children
}: { 
  children: React.ReactNode
}) {
  return <TextToSpeechLayout>{children}</TextToSpeechLayout>;
};