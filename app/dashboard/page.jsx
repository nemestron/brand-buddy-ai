"use client"
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/configs/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { Loader2, Download, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner' // Optional: for copy feedback if you have it, else console.log

function Dashboard() {
  const { user } = useUser();
  const [logoList, setLogoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && GetUserLogos();
  }, [user])

  const GetUserLogos = async () => {
    setLoading(true);
    setLogoList([]);
    try {
      // Path: users -> [email] -> logos
      const q = collection(db, "users", user?.primaryEmailAddress?.emailAddress, "logos");
      const querySnapshot = await getDocs(q);
      
      const logos = [];
      querySnapshot.forEach((doc) => {
        logos.push(doc.data());
      });
      
      // Sort by newest first (optional, assumes we have createdAt or id timestamp)
      setLogoList(logos.reverse()); 
    } catch (e) {
      console.error("Error fetching logos:", e);
    } finally {
        setLoading(false);
    }
  }

  const onDownload = (image, id) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = 'BrandBuddy_' + id + '.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='mt-28 p-10 2xl:mx-72'>
      <div className='flex justify-between items-center mb-10'>
        <h2 className='font-bold text-3xl text-primary'>My Logos</h2>
      </div>

      {loading ? (
        <div className='flex justify-center items-center h-64'>
             <Loader2 className='animate-spin h-10 w-10 text-primary' />
        </div>
      ) : logoList.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {logoList.map((logo, index) => (
            <div key={index} className='border rounded-xl p-4 shadow-sm hover:shadow-md transition-all'>
                <div className='bg-gray-50 rounded-lg flex justify-center items-center p-2 mb-4 h-[250px]'>
                    <img src={logo.image} alt={logo.title} className='max-h-full max-w-full object-contain' />
                </div>
                
                <h3 className='font-bold text-xl mb-1'>{logo.title}</h3>
                <p className='text-sm text-gray-500 line-clamp-2'>{logo.short_description}</p>
                
                <div className='flex justify-between mt-4'>
                    <Button variant="outline" size="sm" onClick={() => onDownload(logo.image, logo.id)}>
                        <Download className='h-4 w-4 mr-2'/> Download
                    </Button>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='text-center py-20 text-gray-400'>
            <h2 className='text-xl'>No logos generated yet.</h2>
        </div>
      )}
    </div>
  )
}

export default Dashboard
