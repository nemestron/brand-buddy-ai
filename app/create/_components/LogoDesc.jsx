import React from 'react'
import { Input } from '@/components/ui/input'

function LogoDesc({ onHandleInputChange, formData }) {
  return (
    <div className='my-10'>
      <h2 className='text-primary text-3xl font-bold'>
        Describe your Logo Vision
      </h2>
      <p className='text-gray-500 mt-2'>
        Share your ideas, themes, or keywords (e.g., minimalist, tech, nature).
      </p>
      <Input 
        type="text" 
        placeholder="Describe your logo..."
        className="p-4 rounded-lg mt-5 w-full shadow-md"
        defaultValue={formData?.desc}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoDesc
