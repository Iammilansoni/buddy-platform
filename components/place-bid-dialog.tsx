"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface PlaceBidDialogProps {
  children: React.ReactNode
}

export function PlaceBidDialog({ children }: PlaceBidDialogProps) {
  const [amount, setAmount] = useState("100")
  const [commission, setCommission] = useState("5")
  const [comment, setComment] = useState("")
  const [saveTemplate, setSaveTemplate] = useState(false)
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAmount(value)
    // Calculate commission (28% of amount)
    const amountNum = Number.parseFloat(value) || 0
    const commissionValue = (amountNum * 0.28).toFixed(2)
    setCommission(commissionValue)
  }

  const handleSubmit = () => {
    toast({
      title: "Bid placed successfully",
      description: `Your bid of $${amount} has been placed.`,
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Place Bid</DialogTitle>
        </DialogHeader>
        <div className="relative mt-2 rounded-lg border border-yellow-200 bg-yellow-50 p-4 pr-10">
          <button className="absolute right-2 top-2 text-gray-400" onClick={() => {}}>
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Mauris eget metus nibh suspendisse amet aliquet vitae mauris.
            Pellentesque feugiat.
          </p>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">Your earning, without commision</label>
          <div className="relative">
            <Input type="text" value={amount} onChange={handleAmountChange} className="pr-10" />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500">$</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-purple-600">Recommended bid $30</p>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">Your bid including writers commission</label>
          <div className="text-2xl font-bold">${commission}</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Including writer's commission fee of 28%
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">Comment</label>
          <Textarea
            placeholder="write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="mt-2 flex items-center gap-2">
            <Checkbox
              id="save-template"
              checked={saveTemplate}
              onCheckedChange={(checked) => setSaveTemplate(checked === true)}
            />
            <label htmlFor="save-template" className="text-sm">
              Save comment as a template
            </label>
          </div>
        </div>

        <DialogFooter className="mt-4 flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700" onClick={handleSubmit}>
            Place Bid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

