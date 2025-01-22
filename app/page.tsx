"use client";
import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Our AI algorithms are optimized to provide you with the fastest responses",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our AI algorithms are optimized to provide you with the fastest responses",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDF files in a whole new way with our interactive PDF viewer",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description: "Never lose your files again with our secure cloud backup",
    icon: ServerCogIcon,
  },
  {
    name: "Cross-Platform Support",
    description: "Access your files on any device, anywhere, anytime",
    icon: MonitorSmartphoneIcon,
  },
];
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg: p-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl ">
        <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold loading-7 text-pink-500">
              Your Interactive Document Companion
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
            </p>

            <p>
              Introducing{" "}
              <span className="font-bold text-pink-500">Chat with PDF.</span>
              <br />
              <br /> Upload your PDFs and start a conversation with them.
              <span className="text-pink-500">Chat with PDF</span> turns static
              documents into{" "}
              <span className="text-pink-500">dynamic conversations</span>,
              enhancing your productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflown-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="Chat with PDF"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl
            className="mx-auto max-w-2xl grid grid-cols-1
            gap-x-6 gap-y-10 text-base leading-7
             text-gray-600 sm:grid-cols-2
              lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          >
            {features.map(feature => (
              // eslint-disable-next-line react/jsx-key
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5
                      text-pink-500"
                  />
                </dt>

                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
