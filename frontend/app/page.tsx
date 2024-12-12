import LoginForm from "@/components/forms/login-form";
import { RegisterFrom } from "@/components/forms/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <Tabs defaultValue="account" className="w-[400px] h-[600px] flex items-center justify-start flex-col">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Register</TabsTrigger>
                    <TabsTrigger value="password">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Register</CardTitle>
                            <CardDescription>Create You Account to export more!</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RegisterFrom />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="password" className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Login To Your Account to see information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LoginForm />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
};
export default Home;
