import React from 'react'

function LogoIdea({ formData }) {
  return (
    <div className='my-10 text-center'>
      <h2 className='text-primary text-3xl font-bold'>
        Your AI Logo is Brewing!
      </h2>
      <p className='text-gray-500 mt-2'>
        Please wait while we generate logo concepts for {formData?.title}.
      </p>
      
      <div className='mt-10 flex justify-center'>
         {/* Simple Loader Placeholder */}
         <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary'></div>
      </div>
      
      <p className='text-sm text-gray-400 mt-6'>
        (AI Generation Logic will be implemented in Phase 4)
      </p>
    </div>
  )
}

export default LogoIdea
