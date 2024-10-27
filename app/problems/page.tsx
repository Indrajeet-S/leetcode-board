import Link from "next/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import Image from "next/image"
import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Pencil, Users, Brain, Code } from "lucide-react"

export default function Home() {
  const features = [
    {
      title: "Interactive Whiteboard",
      description: "Brainstorm and visualize your problem-solving approach with our digital whiteboard",
      icon: <Pencil className="w-6 h-6 mb-1 text-primary" />,
    },
    {
      title: "Collaborative Learning",
      description: "Work together with peers to solve complex programming challenges",
      icon: <Users className="w-6 h-6 mb-1 text-primary" />,
    },
    {
      title: "Problem Analysis",
      description: "Break down complex LeetCode problems into manageable components",
      icon: <Brain className="w-6 h-6 mb-1 text-primary" />,
    },
    {
      title: "Code Solutions",
      description: "Document and share your solution approaches with the community",
      icon: <Code className="w-6 h-6 mb-1 text-primary" />,
    },
  ]

  return (
    <main className="h-screen flex items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-6">
        {/* Header section */}
        <div className="max-w-2xl text-center">
          <PageHeader className="space-y-2">
            <PageHeaderHeading className="text-2xl md:text-3xl">
              LeetCode Board
            </PageHeaderHeading>
            <PageHeaderDescription className="text-sm">
              A Web App that allows any user to brainstorm problem ideas on a Whiteboard!
            </PageHeaderDescription>
            <PageActions className="flex gap-2 mt-2 justify-center">
              <Link
                href="/problems"
                className={cn(
                  buttonVariants(),
                  "px-3 py-1.5 text-sm"
                )}
              >
                Get Started
              </Link>
              <Link
                rel="noreferrer"
                href="/community-communication"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "px-3 py-1.5 text-sm"
                )}
              >
                <Image
                  src="/help_mark.png"
                  alt="help"
                  width={14}
                  height={14}
                  className="mr-2"
                />
                Help
              </Link>
            </PageActions>
          </PageHeader>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-3 max-w-3xl">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center space-y-1 p-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-sm font-medium">{feature.title}</CardTitle>
                <CardDescription className="text-xs">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}