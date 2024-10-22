"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FcGoogle } from "react-icons/fc"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import Link from "next/link"

const signUpSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: z.infer<typeof signUpSchema>) => {
        console.log(data)
    }

  return (
    <Card className="w-full h-full md:w-[478px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>By signing up, you agree to our{" "}
            <Link href="/privacy">
                <span className="text-blue-500">Privacy Policy</span>
            </Link>{" "}
            and{" "}
            <Link href="/terms">
                <span className="text-blue-500">Terms of Service.</span>
            </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <Input 
                        type="text"
                        {...field}
                        placeholder="Enter your name"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
            />
            <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <Input 
                        type="email"
                        {...field}
                        placeholder="Enter email address"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
            />
            <FormField name="password" control={form.control} render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <Input 
                        type="password"
                        {...field}
                        placeholder="Enter password"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
            />
            <Button type="submit" size="lg" className="w-full" disabled={false}>Sign up</Button>
        </form>
        </Form>
      </CardContent>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button type="button" variant="secondary" size="lg" className="w-full" disabled={false}>
            <FcGoogle className="size-5 mr-2" />
            Sign up with Google
        </Button>
      </CardContent>
    </Card>
  )
}
