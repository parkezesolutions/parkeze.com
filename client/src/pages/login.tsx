import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@assets/ParkezeNoBg.png";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Link href="/">
        <a className="absolute top-8 left-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </a>
      </Link>

      <Card className="w-full max-w-md shadow-xl border-border/60">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Parkeze" className="h-10 w-auto" />
          </div>
          <CardTitle className="text-2xl font-display">Welcome back</CardTitle>
          <CardDescription>Sign in to your Parkeze account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="developer">Developer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="admin@organization.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Sign In to Dashboard</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="developer">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dev-email">Developer Email</Label>
                  <Input id="dev-email" placeholder="dev@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dev-password">API Key / Password</Label>
                  <Input id="dev-password" type="password" />
                </div>
                <Button className="w-full" variant="secondary">Sign In to Console</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 text-center text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary underline">Forgot your password?</a>
          <div>
            Don't have an account? <Link href="/#contact-section" className="text-primary font-medium hover:underline">Contact@Parkeze.com</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
