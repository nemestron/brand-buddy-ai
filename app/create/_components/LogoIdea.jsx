import React from 'react'
import { Loader2 } from 'lucide-react'

function LogoIdea({ loading, generatedLogo }) {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      {loading ? (
        <>
          <Loader2 className='animate-spin h-10 w-10 text-primary mb-5' />
          <h2 className='text-2xl font-bold'>Your AI Logo is Brewing!</h2>
          <p className='text-gray-500 mt-2'>Please wait while we generate logo concepts...</p>
        </>
      ) : generatedLogo?.image ? (
        <div className='text-center'>
            <h2 className='text-2xl font-bold text-primary mb-4'>Here is your Logo!</h2>
            <div className='flex justify-center'>
                {/* Display the Base64 Image */}
                <img 
                    src={generatedLogo.image} 
                    alt="AI Generated Logo" 
                    className='rounded-xl shadow-lg border w-[400px] h-[400px] object-contain'
                />
            </div>
            <p className='mt-5 text-gray-600 max-w-lg mx-auto'>{generatedLogo.short_description}</p>
        </div>
      ) : (
        <h2 className='text-red-500'>Something went wrong. Please try again.</h2>
      )}
    </div>
  )
}

export default LogoIdea
