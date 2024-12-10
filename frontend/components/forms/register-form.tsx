"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useEffect } from "react";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

export function RegisterFrom() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const handleUsernameBlur = async (username: string) => {
        //task send request
        form.setError("username", {message: "username is taken"})
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const res = await fetch("http://localhost:3000/api/v1/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(values),
            });

            console.log(res);
            const { message } = await res.json();
            if (res.ok) {
                toast.success(message);
                form.reset();
            } else {
                toast.error(message);
            }
        } catch (err) {
            console.log(err);
            toast.error("Faild to Fetch");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                            <Input
                    placeholder="username"
                    {...field}
                    onBlur={(event) => {
                        field.onBlur(); // Ensure React Hook Form's default behavior is preserved
                        handleUsernameBlur(event.target.value); // Your custom logic
                    }}
                />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="******" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
