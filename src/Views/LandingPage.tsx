import Link from "next/link";
import { PenLine, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <PenLine className="h-6 w-6" />
            <span className="text-xl font-bold">DrawCanvas</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium">
              Gallery
            </Link>
            <Link href="#" className="text-sm font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="canvas/">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unleash Your Creativity with DrawCanvas
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create stunning digital art with our intuitive drawing tools.
                  Start with a blank canvas and bring your ideas to life.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/canvas">
                  <Button size="lg" className="h-12 px-8">
                    Create New Canvas
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg" className="h-12 px-8">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Drawing Tools
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to create amazing digital artwork in one
                  place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <PenLine className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Drawing Tools</h3>
                  <p className="text-muted-foreground">
                    Choose from a variety of tools including pen, pencil, brush,
                    and more to create your masterpiece.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Palette className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Color Options</h3>
                  <p className="text-muted-foreground">
                    Access a full color palette with custom color picker to find
                    the perfect shade for your artwork.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Special Effects</h3>
                  <p className="text-muted-foreground">
                    Add special effects, filters, and transformations to enhance
                    your drawings with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/canvas">
                <Button size="lg" className="h-12 px-8">
                  Try It Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:items-center md:gap-4 md:px-6">
          <div className="flex items-center gap-2">
            <PenLine className="h-5 w-5" />
            <span className="text-lg font-semibold">DrawCanvas</span>
          </div>
          <p className="text-xs text-muted-foreground md:ml-auto">
            &copy; {new Date().getFullYear()} DrawCanvas. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
