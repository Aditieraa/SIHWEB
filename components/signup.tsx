'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { User, Mail, Lock, Plus, Chrome } from 'lucide-react'

export default function Signup({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="fullName" placeholder="John Doe" className="pl-10" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="email" type="email" placeholder="email@example.com" className="pl-10" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="administrator">Administrator</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="institution-management">Institutional Management</SelectItem>
            <SelectItem value="parent">Parent</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full" onClick={() => setIsAuthenticated(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Create Account
      </Button>
      <div className="flex items-center justify-center gap-2">
        <Separator className="flex-1" />
        <span className="text-xs uppercase text-muted-foreground">OR</span>
        <Separator className="flex-1" />
      </div>
      <Button variant="outline" className="w-full" onClick={() => setIsAuthenticated(true)}>
        <Chrome className="mr-2 h-4 w-4" />
        Continue with Google
      </Button>
    </div>
  )
}