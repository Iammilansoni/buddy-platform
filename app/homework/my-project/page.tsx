import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Projects - Homework",
  description: "View and manage your academic projects",
}

export default function MyProjectPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold">My Project</h1>
      </div>

      <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
        <Suspense fallback={<ProjectSkeleton count={3} />}>
          <ProjectList />
        </Suspense>
      </div>
    </div>
  )
}

async function getProjects() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 600))

  return [
    {
      id: "1",
      status: "auction",
      title: "lorem ipsum",
      category: "Criminology, Personal Statement",
      deadline: "January 31, 2025, 11:30 Am",
      orderId: "3744728",
      bidCount: 1,
      price: "$90",
      hasBestOffer: true,
    },
    {
      id: "2",
      status: "auction",
      title: "lorem ipsum",
      category: "Criminology, Personal Statement",
      deadline: "January 31, 2025, 11:30 Am",
      orderId: "3744728",
      bidCount: 1,
      price: "$90",
      hasBestOffer: true,
    },
    {
      id: "3",
      status: "draft",
      title: "lorem ipsum",
      category: "Criminology, Personal Statement",
      deadline: "January 31, 2025, 11:30 Am",
      orderId: "3744728",
      bidCount: 55,
      price: "$50-$69",
      hasBestOffer: true,
      hasFile: true,
    },
  ]
}

async function ProjectList() {
  const projects = await getProjects()

  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  )
}

function ProjectCard({ project }: { project: any }) {
  const getStatusBadge = () => {
    switch (project.status) {
      case "auction":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-600">
            At the Auction <span className="ml-1 rounded-full bg-red-600 px-1 text-white">2</span>
          </Badge>
        )
      case "draft":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-600">
            Drafts <span className="ml-1 rounded-full bg-gray-600 px-1 text-white">1</span>
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          {getStatusBadge()}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
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
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-medium text-purple-600">{project.title}</h2>
          <p className="text-sm text-gray-500">{project.category}</p>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            <p className="mt-1 text-sm">{project.deadline}</p>
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
            <p className="mt-1 text-sm">{project.orderId}</p>
          </div>
          {project.hasFile && (
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span className="text-xs font-medium">File(1)</span>
              </div>
              <p className="mt-1 text-sm text-purple-600 underline">File(1)</p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">{project.bidCount} Bid</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xs text-gray-500">Price</span>
              <span className="text-lg font-bold">{project.price}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            {project.hasBestOffer && <Badge className="bg-green-500">Best Offer</Badge>}
            <Button className="mt-2 w-full sm:w-auto bg-purple-600 hover:bg-purple-700">Check the Offers</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>

              <div className="mt-4 space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-40" />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-40" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-9 w-36" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
    </>
  )
}

