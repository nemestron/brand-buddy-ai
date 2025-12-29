import React from 'react'
import { Input } from '@/components/ui/input'

function LogoTitle({ onHandleInputChange, formData }) {
  return (
    <div className='my-10'>
      <h2 className='text-primary text-3xl font-bold'>
        What is the name of your Brand?
      </h2>
      <p className='text-gray-500 mt-2'>
        Add the name of your brand, company, or organization.
      </p>
      <Input 
        type="text" 
        placeholder="Brand Name (e.g. Nike, Apple)"
        className="p-4 rounded-lg mt-5 w-full shadow-md"
        defaultValue={formData?.title}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoTitle
