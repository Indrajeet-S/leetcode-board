import type { Metadata } from "next"
import DiscordEmbed from "@/components/custom/discord-embed"
import { Disc } from "lucide-react"

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
