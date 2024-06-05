import type { Metadata } from "next"
import dynamic from "next/dynamic"
// Dynamically import the Discordembed component
const DiscordEmbed = dynamic(
  () => import("@/components/custom/discord-embed"),
  { ssr: false }
)

export const metadata: Metadata = {
  title: "Communicate - LC Board",
}

export default function communityCommunication() {
  return (
    <div className="z-100">
      <DiscordEmbed />
    </div>
  )
}
