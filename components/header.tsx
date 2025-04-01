"use client"

import Link from "next/link"
import { Bell, MessageSquare, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { MobileSidebar } from "./mobile-sidebar"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

export default function Header() {
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMounted) return null

  const handleNotificationClick = () => {
    toast({
      title: "New notifications",
      description: "You have 3 unread notifications",
    })
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4 transition-shadow duration-200",
        isScrolled && "shadow-sm",
      )}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <MobileSidebar />
              </Suspense>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
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
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/studybank" className="text-gray-700 hover:text-purple-600 transition-colors">
            StudyBank
          </Link>
          <Link href="/find-tutor" className="text-gray-700 hover:text-purple-600 transition-colors">
            Find Tutor
          </Link>
          <Link href="/homework" className="text-gray-700 hover:text-purple-600 transition-colors">
            Homework
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex items-center rounded-md border border-orange-200 bg-orange-50 px-2 py-1 text-sm">
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
            className="text-orange-500"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span className="ml-1 text-orange-500">0 USD</span>
        </div>
        <Button variant="outline" className="hidden sm:flex border-purple-200 text-purple-600 hover:bg-purple-50">
          Refer a Friend
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="hidden md:flex border-gray-200">
              English, USD
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
                className="ml-2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English, USD</DropdownMenuItem>
            <DropdownMenuItem>Spanish, EUR</DropdownMenuItem>
            <DropdownMenuItem>French, EUR</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500" onClick={handleNotificationClick}>
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
          <AvatarFallback>
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

