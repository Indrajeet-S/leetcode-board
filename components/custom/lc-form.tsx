"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  ID: z.coerce.number().int().positive().finite(),
})

export function ProblemIDForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ID: undefined,
    },
  })

  const router = useRouter()
  function onSubmit(values: z.infer<typeof FormSchema>) {
    // console.log(values)
    router.push(`/problems/${values.ID}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="ID"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-center">Problem ID</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter ID here" {...field} />
              </FormControl>
              <FormDescription>LeetCode problem ID</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
