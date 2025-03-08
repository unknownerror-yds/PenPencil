import { PenLine, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full h-full bg-[#F5F5F5] text-[#666666]">
      <header className="border-b bg-[#FFFFFF]">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 fixed top-0 left-0 right-0 bg-[#FFFFFF] z-10">
          <div className="flex items-center gap-2">
            <PenLine className="h-6 w-6 text-[#333333]" />
            <span className="text-xl font-bold text-[#333333]">PenPencil</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium text-[#333333]">
              Home
            </Link>
            <Link to="#features" className="text-sm font-medium text-[#333333]">
              Features
            </Link>
            <Link to="#" className="text-sm font-medium text-[#333333]">
              Gallery
            </Link>
            <Link to="#" className="text-sm font-medium text-[#333333]">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="canvas/">
              <Button className="bg-[#FACC2E] text-[#333333]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#333333]">
                  Unleash Your Creativity with PenPencil
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-[#666666]">
                  Create stunning digital art with our intuitive drawing tools.
                  Start with a blank canvas and bring your ideas to life.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="canvas/">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-[#4A90E2] text-[#FFFFFF]"
                  >
                    Create New Canvas
                  </Button>
                </Link>
                <Link to="#features">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 border-[#4A90E2] text-[#4A90E2]"
                  >
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#333333]">
                  Powerful Drawing Tools
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#666666]">
                  Everything you need to create amazing digital artwork in one
                  place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#333333] text-[#FFFFFF]">
                  <PenLine className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#333333]">
                    Drawing Tools
                  </h3>
                  <p className="text-muted-foreground text-[#666666]">
                    Choose from a variety of tools including pen, pencil, brush,
                    and more to create your masterpiece.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#333333] text-[#FFFFFF]">
                  <Palette className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#333333]">
                    Color Options
                  </h3>
                  <p className="text-muted-foreground text-[#666666]">
                    Access a full color palette with custom color picker to find
                    the perfect shade for your artwork.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#333333] text-[#FFFFFF]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#333333]">
                    Special Effects
                  </h3>
                  <p className="text-muted-foreground text-[#666666]">
                    Add special effects, filters, and transformations to enhance
                    your drawings with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/canvas">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-[#4A90E2] text-[#FFFFFF]"
                >
                  Try It Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-[#FFFFFF]">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:items-center md:gap-4 md:px-6">
          <div className="flex items-center gap-2">
            <PenLine className="h-5 w-5 text-[#333333]" />
            <span className="text-lg font-semibold text-[#333333]">
              PenPencil
            </span>
          </div>
          <p className="text-xs text-muted-foreground md:ml-auto text-[#666666]">
            &copy; {new Date().getFullYear()} PenPencil. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              to="#"
              className="text-xs hover:underline underline-offset-4 text-[#666666]"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-xs hover:underline underline-offset-4 text-[#666666]"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
