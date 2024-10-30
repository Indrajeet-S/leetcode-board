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
import Login from "./login"

export default function Home() {
  const features = [
    {
      title: "Interactive Whiteboard",
      description: "Brainstorm and visualize your problem-solving approach with our digital whiteboard",
      icon: <Pencil className="w-12 h-12 mb-4 text-primary" />,
    },
    {
      title: "Collaborative Learning",
      description: "Work together with peers to solve complex programming challenges",
      icon: <Users className="w-12 h-12 mb-4 text-primary" />,
    },
    {
      title: "Problem Analysis",
      description: "Break down complex LeetCode problems into manageable components",
      icon: <Brain className="w-12 h-12 mb-4 text-primary" />,
    },
    {
      title: "Code Solutions",
      description: "Document and share your solution approaches with the community",
      icon: <Code className="w-12 h-12 mb-4 text-primary" />,
    },
  ]

  return (
    <main className="h-screen overflow-hidden bg-background">
      <div className="container h-full mx-auto flex flex-col px-4 py-8 md:py-12 lg:py-16">
        
        {/* Header section */}
        <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
          <PageHeader className="pb-8 md:pb-12">
            <PageHeaderHeading className="mb-4">
              LeetCode Board
            </PageHeaderHeading>
            <PageHeaderDescription className="mb-6">
              A Web App that allows any user to brainstorm problem ideas on a Whiteboard!
            </PageHeaderDescription>
            <PageActions className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link 
                href="/problems" 
                className={cn(
                  buttonVariants(),
                  "w-full sm:w-auto"
                )}
              >
                Get Started
              </Link>
              <Link
                rel="noreferrer"
                href="/community-communication"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto"
                )}
              >
                <Image
                  src="/help_mark.png"
                  alt="help"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Help
              </Link>
              <Login />
            </PageActions>
          </PageHeader>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
