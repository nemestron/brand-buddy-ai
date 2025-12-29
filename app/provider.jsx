"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

// Export Context so other pages can use it (e.g. to check credits)
export const UserDetailContext = createContext();

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();

  // Trigger when 'user' state changes (Login/Logout)
  useEffect(() => {
    if (user) {
      CheckUser();
    }
  }, [user]);

  const CheckUser = async () => {
    try {
      // Calls our backend route
      const result = await axios.post('/api/users', {
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress
      });
      
      console.log("User Synced:", result.data);
      setUserDetail(result.data);
    } catch (error) {
      console.error("Sync Error:", error);
    }
  }

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
    </UserDetailContext.Provider>
  )
}

export default Provider
