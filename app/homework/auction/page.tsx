import { Search, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlaceBidDialog } from "@/components/place-bid-dialog"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auction - Homework",
  description: "Browse and bid on available academic projects",
}

export default function AuctionPage() {
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="text-purple-600"
          >
            <path
              d="M10 8L20 4L30 8V16.5C30 23.5 26 30 20 32C14 30 10 23.5 10 16.5V8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">Auction</h1>
      </div>

      <div className="mt-6 md:mt-8 grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                  <h2 className="text-lg font-semibold">Found 363 Order</h2>
                  <span className="text-sm text-gray-500">Out of total 325</span>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-4 md:mt-6 space-y-4">
                <Suspense fallback={<AuctionItemSkeleton count={4} />}>
                  <AuctionList />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-gray-500" />
                <h2 className="text-lg font-semibold">Search new project</h2>
                <Button variant="link" className="ml-auto text-purple-600">
                  Reset
                </Button>
              </div>

              <div className="mt-4 md:mt-6 space-y-4">
                <div>
                  <Input placeholder="Enter the title..." />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="urgent" />
                  <label htmlFor="urgent" className="text-sm">
                    I want to take urgent order
                  </label>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Project Type</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="type1">Project Type 1</SelectItem>
                      <SelectItem value="type2">Project Type 2</SelectItem>
                      <SelectItem value="type3">Project Type 3</SelectItem>
                      <SelectItem value="type4">Project Type 4</SelectItem>
                      <SelectItem value="type5">Project Type 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Subject Area</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursing">Nursing</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="psychology">Psychology</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="less-than-3" />
                    <label htmlFor="less-than-3" className="text-sm">
                      With less than 3 bids
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="no-bids-from-me" />
                    <label htmlFor="no-bids-from-me" className="text-sm">
                      With no bids from me
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="no-bids-at-all" />
                    <label htmlFor="no-bids-at-all" className="text-sm">
                      With no bids at all
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="link" className="text-purple-600">
                    More Filters
                  </Button>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800">Search</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

async function getAuctionItems() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800))

  return [
    {
      id: "1",
      title: "lorem ipsum",
      category: "Criminology, Personal Statement",
      status: "new",
      deadline: "Jan 31, 2025, 11:30 am",
      orderId: "3744728",
      bidCount: 12,
      price: "$90",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      title: "lorem ipsum",
      category: "Criminology, Personal Statement",
      status: "bidding",
      deadline: "Jan 31, 2025, 11:30 am",
      orderId: "3744728",
      bidCount: 12,
      price: null,
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: "3",
      title: "lorem ipsum",
      category: "Criminology, Personal Statement",
      status: "writer-assigned",
      deadline: "Jan 31, 2025, 11:30 am",
      orderId: "3744728",
      bidCount: 12,
      price: null,
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: "4",
      title: "lorem ipsum",
      category: "Criminology, Personal Statement",
      status: "new",
      deadline: "Jan 31, 2025, 11:30 am",
      orderId: "3744728",
      bidCount: 12,
      price: "$90",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ]
}

async function AuctionList() {
  const items = await getAuctionItems()

  return (
    <>
      {items.map((item) => (
        <AuctionItem key={item.id} item={item} />
      ))}
    </>
  )
}

function AuctionItem({ item }: { item: any }) {
  const getStatusBadge = () => {
    switch (item.status) {
      case "new":
        return <span className="rounded bg-blue-500 px-2 py-0.5 text-xs text-white">New</span>
      case "bidding":
        return <span className="rounded bg-green-500 px-2 py-0.5 text-xs text-white">Bidding</span>
      case "writer-assigned":
        return <span className="rounded bg-yellow-500 px-2 py-0.5 text-xs text-white">Writer Assigned</span>
    }
  }

  return (
    <div className="border-b border-gray-100 pb-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={item.avatar} alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-purple-600">{item.title}</h3>
            {getStatusBadge()}
          </div>
          <p className="text-sm text-gray-500">{item.category}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <div className="flex items-center gap-2">
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
              className="text-purple-600"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <line x1="3" x2="21" y1="9" y2="9" />
              <line x1="9" x2="9" y1="21" y2="9" />
            </svg>
            <span className="text-xs font-medium">Deadline</span>
          </div>
          <p className="mt-1 text-sm">{item.deadline}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
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
              className="text-purple-600"
            >
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
            </svg>
            <span className="text-xs font-medium">ID</span>
          </div>
          <p className="mt-1 text-sm">{item.orderId}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
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
              className="text-purple-600"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-xs font-medium">bid</span>
          </div>
          <p className="mt-1 text-sm text-purple-600">{item.bidCount} Bid</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
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
              className="text-purple-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="text-xs font-medium">You Get</span>
          </div>
          {item.price ? (
            <p className="mt-1 text-sm font-medium">{item.price}</p>
          ) : (
            <p className="mt-1 text-sm font-medium">Price not Set</p>
          )}
        </div>
        {item.status === "new" ? (
          <Button variant="outline" className="border-gray-300">
            Edit Bid
          </Button>
        ) : (
          <PlaceBidDialog>
            <Button className="bg-purple-600 hover:bg-purple-700">Place Bid</Button>
          </PlaceBidDialog>
        )}
      </div>
    </div>
  )
}

function AuctionItemSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border-b border-gray-100 pb-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        ))}
    </>
  )
}

