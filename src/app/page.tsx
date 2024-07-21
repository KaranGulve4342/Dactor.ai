// import Link from "next/link";
// import Image from "next/image";
// import { PanelsTopLeft } from "lucide-react";
// import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="min-h-[calc(100vh-57px-97px)] flex-1">
//         <div className="container relative pb-10">
//           <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
//             <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
//               Dactor.ai
//             </h1>
//             <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
//               <Button variant="default" asChild>
//                 <Link href="/dashboard">
//                   Get Started
//                   <ArrowRightIcon className="ml-2" />
//                 </Link>
//               </Button>
//             </div>
//           </section>
//         </div>
//       </main>
//       <footer className="py-6 md:py-0 border-t border-border/40">
//         <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
//         </div>
//       </footer>
//     </div>
//   );
// }

import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Dactor.ai
            </h1>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Get Started
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        </div>
      </footer>
    </div>
  );
}
