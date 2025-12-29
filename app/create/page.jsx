"use client"
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import LogoTitle from './_components/LogoTitle'
import LogoDesc from './_components/LogoDesc'
import ColorPalette from './_components/ColorPalette'
import LogoDesign from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'
import { useSearchParams } from 'next/navigation'

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const searchParams = useSearchParams();

  // Initialize Title from URL if available
  useEffect(() => {
    const titleFromUrl = searchParams.get('title');
    if (titleFromUrl) {
        setFormData(prev => ({...prev, title: titleFromUrl}));
    }
  }, [searchParams]);

  // Handle Input Changes from Child Components
  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
        ...prev,
        [field]: value
    }));
    console.log("Form Data Updated:", formData); // Debugging
  }

  return (
    <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
      {/* Wizard Header */}
      <h2 className="font-bold text-3xl text-primary text-center">
        Create Your Logo
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Step {step} of 5
      </p>

      {/* Dynamic Step Rendering */}
      <div className="mt-10">
        {step === 1 ? (
            <LogoTitle 
                onHandleInputChange={(v) => onHandleInputChange('title', v)} 
                formData={formData} 
            />
        ) : step === 2 ? (
            <LogoDesc 
                onHandleInputChange={(v) => onHandleInputChange('desc', v)} 
                formData={formData} 
            />
        ) : step === 3 ? (
            <ColorPalette 
                onHandleInputChange={(v) => onHandleInputChange('palette', v)} 
                formData={formData} 
            />
        ) : step === 4 ? (
            <LogoDesign 
                onHandleInputChange={(v) => onHandleInputChange('design', v)} 
                formData={formData} 
            />
        ) : step === 5 ? (
            <LogoIdea 
                formData={formData} 
            />
        ) : null}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-10">
        {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)}> 
                <ArrowLeft className='mr-2 h-4 w-4'/> Previous 
            </Button>
        ) : (
            <Link href="/">
                <Button variant="outline"> 
                    <ArrowLeft className='mr-2 h-4 w-4'/> Home 
                </Button>
            </Link>
        )}

        {/* Hide Continue button on Step 5 (Generation Step) */}
        {step < 5 && (
            <Button onClick={() => setStep(step + 1)}>
                Continue <ArrowRight className='ml-2 h-4 w-4'/>
            </Button>
        )}
      </div>
    </div>
  )
}

export default CreateLogo
