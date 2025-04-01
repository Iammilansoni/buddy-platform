import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Dashboard",
  description: "View your notifications and recommended assignments",
}

export default function Home() {
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
        <h1 className="text-2xl md:text-3xl font-bold">Home</h1>
      </div>

      <div className="mt-6 md:mt-8 grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-purple-600" />
                  <h2 className="text-lg font-semibold">Notification</h2>
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-600">New 03</span>
                </div>
                <Button variant="ghost" className="text-red-500">
                  Delete All
                </Button>
              </div>

              <div className="mt-4 md:mt-6 space-y-4">
                <Suspense fallback={<NotificationSkeleton count={4} />}>
                  <NotificationList />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-4 md:p-6">
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
                <h2 className="text-lg font-semibold">Recommended Assignment</h2>
              </div>

              <div className="mt-4 md:mt-6 space-y-4">
                <Suspense fallback={<RecommendedSkeleton count={5} />}>
                  <RecommendedList />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

async function getNotifications() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "1",
      projectId: "78963566",
      title: "PowerPoint presentation Nursing",
      category: "Organization values",
      price: "Negotiable",
      deadline: "Today 02:56pm",
    },
    {
      id: "2",
      projectId: "78963567",
      title: "Research Paper on Climate Change",
      category: "Environmental Science",
      price: "Negotiable",
      deadline: "Today 04:30pm",
    },
    {
      id: "3",
      projectId: "78963568",
      title: "Case Study Analysis",
      category: "Business Management",
      price: "Negotiable",
      deadline: "Today 05:15pm",
    },
    {
      id: "4",
      projectId: "78963569",
      title: "Literature Review",
      category: "English Literature",
      price: "Negotiable",
      deadline: "Tomorrow 10:00am",
    },
  ]
}

async function getRecommendedAssignments() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 700))

  return [
    {
      id: "1",
      projectId: "78963566",
      title: "PowerPoint presentation Nursing",
      category: "Organization values",
      price: "Negotiable",
      deadline: "31/6/2025",
    },
    {
      id: "2",
      projectId: "78963570",
      title: "Statistical Analysis Report",
      category: "Data Science",
      price: "Negotiable",
      deadline: "31/6/2025",
    },
    {
      id: "3",
      projectId: "78963571",
      title: "Marketing Strategy Plan",
      category: "Business Marketing",
      price: "Negotiable",
      deadline: "31/6/2025",
    },
    {
      id: "4",
      projectId: "78963572",
      title: "Psychology Research Paper",
      category: "Clinical Psychology",
      price: "Negotiable",
      deadline: "31/6/2025",
    },
    {
      id: "5",
      projectId: "78963573",
      title: "Mobile App UI Design",
      category: "Computer Science",
      price: "Negotiable",
      deadline: "31/6/2025",
    },
  ]
}

async function NotificationList() {
  const notifications = await getNotifications()

  return (
    <>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </>
  )
}

async function RecommendedList() {
  const assignments = await getRecommendedAssignments()

  return (
    <>
      {assignments.map((assignment) => (
        <RecommendedItem key={assignment.id} assignment={assignment} />
      ))}
    </>
  )
}

function NotificationItem({ notification }: { notification: any }) {
  return (
    <div className="border-b border-gray-100 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">#{notification.projectId}</span>
        </div>
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <h3 className="mt-1 font-medium">{notification.title}</h3>
      <p className="text-xs text-gray-500">{notification.category}</p>
      <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1">
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
            <span className="text-xs">
              Price: <span className="font-medium">{notification.price}</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
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
            <span className="text-xs">
              Deadline: <span className="font-medium">{notification.deadline}</span>
            </span>
          </div>
        </div>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          Go to Order
        </Button>
      </div>
    </div>
  )
}

function RecommendedItem({ assignment }: { assignment: any }) {
  return (
    <div className="border-b border-gray-100 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">#{assignment.projectId}</span>
        </div>
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <h3 className="mt-1 font-medium">{assignment.title}</h3>
      <p className="text-xs text-gray-500">{assignment.category}</p>
      <div className="mt-2 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1">
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
          <span className="text-xs">
            Price: <span className="font-medium">{assignment.price}</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
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
          <span className="text-xs">
            Deadline: <span className="font-medium">{assignment.deadline}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function NotificationSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <Skeleton className="mt-2 h-5 w-3/4" />
            <Skeleton className="mt-1 h-3 w-1/3" />
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        ))}
    </>
  )
}

function RecommendedSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <Skeleton className="mt-2 h-5 w-3/4" />
            <Skeleton className="mt-1 h-3 w-1/3" />
            <div className="mt-3 flex items-center gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
    </>
  )
}

