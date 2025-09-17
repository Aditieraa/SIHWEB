'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Login from '@/components/login'
import Signup from '@/components/signup'

export default function AuthPage({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              {/* <Shield className="h-6 w-6" /> */}
            </div>
            <div>
              <CardTitle className="text-2xl">SafeSpark Management</CardTitle>
              <CardDescription>
                {isLogin ? 'Sign in to your account' : 'Create a new account'}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLogin ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Signup setIsAuthenticated={setIsAuthenticated} />}
        </CardContent>
        <div className="border-t p-4 text-center">
          <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Log In'}
          </Button>
        </div>
      </Card>
    </div>
  )
}