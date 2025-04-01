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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Suspense } from "react"

// This component doesn't use hooks and can be rendered on the server
function MobileSidebarContent({ pathname }: { pathname: string }) {
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
    <ScrollArea className="h-full py-6">
      <div className="px-3 py-2">
        <div className="flex items-center px-2">
          <Link href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              className="text-purple-600"
            >
              <path
                d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 8 20 8ZM20 28C15.589 28 12 24.411 12 20C12 15.589 15.589 12 20 12C24.411 12 28 15.589 28 20C28 24.411 24.411 28 20 28Z"
                fill="currentColor"
              />
              <path
                d="M20 16C17.791 16 16 17.791 16 20C16 22.209 17.791 24 20 24C22.209 24 24 22.209 24 20C24 17.791 22.209 16 20 16Z"
                fill="currentColor"
              />
            </svg>
            <span className="ml-2 text-xl font-bold text-purple-600">BUDDY</span>
          </Link>
        </div>
        <div className="mt-6 space-y-1">
          {mainNavItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between px-2">
            <Link href="/homework" className="flex items-center text-sm font-medium text-purple-600">
              <BookOpen className="mr-2 h-5 w-5" />
              Homework
            </Link>
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

        <div className="mt-6 space-y-1">
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
  )
}

// This is the client component that uses the usePathname hook
export function MobileSidebar() {
  const pathname = usePathname()

  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <MobileSidebarContent pathname={pathname} />
    </Suspense>
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

