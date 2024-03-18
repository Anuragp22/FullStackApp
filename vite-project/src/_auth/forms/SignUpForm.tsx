
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from "react-hook-form"
import { SignValidation } from "@/lib"
import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { createUserAccount } from "@/lib/appwrite/api"
"use client"


const SignUpForm = () => {

    const isloading = false;

    const form = useForm<z.infer<typeof SignValidation>>({
        resolver: zodResolver(SignValidation),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SignValidation>) {
        const newUser = await createUserAccount(values)
        console.log(newUser)
    }
    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <img src="assets\images\logo.svg" alt="" />

                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
                <p className="text-light-3 small-medium md:base-regular">To use Snapgram please enter your details</p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
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
                                    <Input type="email" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
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
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="shad-button_primary" type="submit">
                        {isloading ? (
                            <div className="flex-center gap-2">
                                <Loader /> Loading....
                            </div>
                        ) : "Sign Up"}
                    </Button>
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        Already have an account? <Link to="/signin" className="text-primary-500 text-small-semibold ml-1">Sign In</Link>
                    </p>
                </form>
            </div>
        </Form>
    )
}

export default SignUpForm