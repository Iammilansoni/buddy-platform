"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Wallet,
  MessageSquare,
  BookOpen,
  Gavel,
  FolderKanban,
  Star,
  Users,
  CreditCard,
  FileText,
  Users2,
  BookOpenIcon,
  School,
  Calendar,
  BarChart2,
  GraduationCap,
  User,
  Settings,
  UsersIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Sidebar() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null
  if (!isDesktop) return null

  const mainNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/wallet", label: "Wallet", icon: Wallet },
    { href: "/message", label: "Message", icon: MessageSquare },
  ]

  const homeworkNavItems = [
    { href: "/homework/home", label: "Home", icon: Home },
    { href: "/homework/auction", label: "Auction", icon: Gavel },
    { href: "/homework/my-project", label: "My Project", icon: FolderKanban },
  ]

  const secondaryNavItems = [
    { href: "/manage-review", label: "Manage Review & Rating", icon: Star },
    { href: "/my-students", label: "My Students", icon: Users },
    { href: "/payments", label: "Payments", icon: CreditCard },
    { href: "/file-notes", label: "File & Notes", icon: FileText },
    { href: "/create-group-lesson", label: "Create Group Lesson", icon: Users2 },
    { href: "/my-lessons", label: "My Lessons", icon: BookOpenIcon },
    { href: "/classroom", label: "Classroom", icon: School },
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/insights", label: "Insights", icon: BarChart2 },
    { href: "/academy", label: "Academy", icon: GraduationCap },
    { href: "/my-profile", label: "My Profile", icon: User },
    { href: "/setting", label: "Setting", icon: Settings },
    { href: "/community", label: "Community", icon: UsersIcon },
  ]

  return (
    <div className="hidden md:block w-64 border-r bg-white">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="flex flex-col gap-1 p-4">
          {mainNavItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
            />
          ))}

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <Link href="/homework" className="flex items-center text-sm font-medium text-purple-600">
                <BookOpen className="mr-2 h-5 w-5" />
                Homework
              </Link>
              <button className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
            </div>
            <div className="mt-2 space-y-1">
              {homeworkNavItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  isActive={pathname === item.href}
                  isSubItem
                />
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-1">
            {secondaryNavItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

interface NavItemProps {
  href: string
  label: string
  icon: React.ElementType
  isActive?: boolean
  isSubItem?: boolean
}

function NavItem({ href, label, icon: Icon, isActive, isSubItem }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? isSubItem
            ? "bg-purple-100 text-purple-600"
            : "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
        isSubItem && "ml-6",
      )}
    >
      <Icon className={cn("h-5 w-5", isActive && isSubItem && "text-purple-600")} />
      {label}
      {isActive && isSubItem && <div className="ml-auto h-2 w-2 rounded-full bg-purple-600"></div>}
    </Link>
  )
}

