"use client"
import { useRouter } from "next/navigation"
import React from "react"

const NewUserPage = () => {
  const router = useRouter()
  return <div>New User Page
    <button className="btn-secondary" onClick={()=>router.push("/users")}>Create User</button>
  </div>
}

export default NewUserPage
