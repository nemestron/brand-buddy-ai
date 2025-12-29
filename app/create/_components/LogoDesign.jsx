import React, { useState } from 'react'

function LogoDesign({ onHandleInputChange, formData }) {

  // Initialize as an array (or empty array if undefined)
  const [selectedOptions, setSelectedOptions] = useState(formData?.design || []);

  const designs = [
    { title: 'Modern', image: '/design-modern.png', description: 'Clean, simple, and geometric.' },
    { title: 'Vintage', image: '/design-vintage.png', description: 'Classic, retro, and nostalgic.' },
    { title: 'Minimalist', image: '/design-minimalist.png', description: 'Less is more. Simple forms.' },
    { title: 'Mascot', image: '/design-mascot.png', description: 'Character-based and friendly.' },
    { title: 'Abstract', image: '/design-abstract.png', description: 'Conceptual and artistic shapes.' },
    { title: '3D', image: '/design-3d.png', description: 'Depth, shadow, and realism.' },
  ];

  const handleUserSelection = (designTitle) => {
      if (selectedOptions.includes(designTitle)) {
          // If already selected, remove it (Toggle Off)
          const newSelection = selectedOptions.filter((item) => item !== designTitle);
          setSelectedOptions(newSelection);
          onHandleInputChange(newSelection);
      } else {
          // If not selected, check limit
          if (selectedOptions.length < 3) {
              const newSelection = [...selectedOptions, designTitle];
              setSelectedOptions(newSelection);
              onHandleInputChange(newSelection);
          }
          // Else: Do nothing (Limit Reached)
      }
  }

  return (
    <div className='my-10'>
      <div className='flex justify-between items-center'>
        <div>
            <h2 className='text-primary text-3xl font-bold'>
                Choose your Logo Style
            </h2>
            <p className='text-gray-500 mt-2'>
                Select up to 3 styles that match your brand vision.
            </p>
        </div>
        {/* Selection Counter */}
        <div className='bg-primary/10 px-4 py-2 rounded-full'>
            <span className='font-bold text-primary'>{selectedOptions.length} / 3 Selected</span>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-5'>
        {designs.map((design, index) => (
            <div 
                key={index}
                className={`p-1 hover:border-2 border-primary rounded-xl cursor-pointer ${selectedOptions.includes(design.title) && 'border-2 border-primary bg-primary/5'}`}
                onClick={() => handleUserSelection(design.title)}
            >
                {/* Image Placeholder */}
                <div className='h-[150px] w-full bg-gray-200 rounded-t-xl flex items-center justify-center text-gray-400'>
                    {design.title} Image
                </div>
                
                <div className='p-2 text-center'>
                    <h3 className='font-bold text-lg'>{design.title}</h3>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesign
