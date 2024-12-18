"use client"

import { useMemo } from "react";
import {useMediaQuery} from "usehooks-ts";
import { Button, Spacer, useDisclosure } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Sidebar, { SidebarItem } from "@/components/next-ui/sidebar";
import { cn } from "@nextui-org/react";
import SidebarDrawer from "@/components/next-ui/sidebar-drawer";
import Image from "next/image";

export default function AppLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const isCompact = useMediaQuery("(min-width : 640px) and (max-width: 1280px)")

  const sectionItems: SidebarItem[] = useMemo(() => [
    {
      key: "home",
      href: "/",
      icon: "solar:home-2-linear",
      title: "Home",
    },
    {
      key: "projects",
      href: "/projects",
      icon: "solar:widget-2-outline",
      title: "Work & Projects",
    },
  ], [])

  const content = (
    <div
      className={cn(
        "relative flex h-full w-72 flex-1 flex-col p-6",
        { "w-16 items-center px-2 py-6": isCompact }
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 px-2",
          { "justify-center gap-0": isCompact }
        )}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-foreground">
          <Image src='/profile-image.jpeg' alt="profile image" width={32} height={32} />
        </div>
        <span
          className={cn(
            "text-small font-bold uppercase text-foreground",
            { "w-0 opacity-0": isCompact }
          )}
        >
          Pedro Cruz
        </span>
      </div>
      <Spacer y={8} />
      <Sidebar defaultSelectedKey='home' items={sectionItems} isCompact={isCompact} />
      <Spacer y={8} />
    </div>
  );

  return (
    <div className="flex h-dvh w-full">
      <SidebarDrawer
        className="!border-r-small border-divider"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {content}
      </SidebarDrawer>
      <div className="w-full flex flex-1 flex-col gap-4 p-4">
        <header className="flex h-16 items-center gap-2 rounded-medium border-small border-divider px-4 sm:hidden">
          <Button isIconOnly className="flex" size="sm" variant="light" onPress={onOpen}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:hamburger-menu-outline"
              width={24}
            />
          </Button>
          <h2 className="text-medium font-medium text-default-700">Overview</h2>
        </header>
        <main className="flex-1 overflow-visible">
          <div className="flex h-full w-full flex-col justify-between gap-4 rounded-medium border-small border-divider p-2 md:p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
