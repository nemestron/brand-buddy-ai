import React from 'react'
import { Loader2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

function LogoIdea({ loading, generatedLogo }) {

  const onDownload = () => {
    // Logic: Create a temporary HTML link element
    // This tricks the browser into thinking the user clicked a file download link
    const link = document.createElement('a');
    link.href = generatedLogo.image;
    link.download = 'BrandBuddy_Logo_' + Date.now() + '.png'; // Unique filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  }

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

            {/* ACTION BUTTONS */}
            <div className='mt-6 flex gap-4 justify-center'>
                <Button onClick={onDownload} className="flex gap-2 items-center">
                    <Download className="h-4 w-4" /> Download Logo
                </Button>
            </div>
        </div>
      ) : (
        <h2 className='text-red-500'>Something went wrong. Please try again.</h2>
      )}
    </div>
  )
}

export default LogoIdea
