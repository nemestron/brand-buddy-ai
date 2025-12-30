"use client"
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import LogoDesc from './_components/LogoDesc'
import ColorPalette from './_components/ColorPalette'
import LogoDesign from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import axios from 'axios'

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [generatedLogo, setGeneratedLogo] = useState(null);

  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  // 1. Generate Prompt (Gemini) -> 2. Generate Image (Hugging Face)
  const GenerateLogo = async () => {
    setLoading(true);
    setStep(6); // Show Loading Screen

    const PROMPT = 'Generate a logo for a brand named ' + formData?.title + 
    '. The description is: ' + formData?.desc + 
    '. The color palette is ' + formData?.palette + 
    '. The design style should be ' + formData?.design?.title;

    try {
      // Step 1: Ask Gemini for the Prompt
      const result = await axios.post('/api/ai-logo-model', {
        prompt: PROMPT
      });
      
      const aiResponse = result.data;
      setGeneratedLogo(aiResponse); // Save text details

      // Step 2: Ask Hugging Face for the Image
      // We append "vector logo, white background" to ensure clean results
      const imagePrompt = aiResponse.prompt + ", vector art, white background, high quality";
      
      const imageResult = await axios.post('/api/ai-design-model', {
        prompt: imagePrompt
      });

      // Step 3: Save the Image URL into the state object
      setGeneratedLogo(prev => ({
        ...prev,
        image: imageResult.data.image
      }));

    } catch (error) {
      console.error("Generation Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      {/* Dynamic Component Rendering */}
      {step === 1 ? <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} formData={formData} /> :
       step === 2 ? <LogoDesc onHandleInputChange={(v) => onHandleInputChange('desc', v)} formData={formData} /> :
       step === 3 ? <ColorPalette onHandleInputChange={(v) => onHandleInputChange('palette', v)} formData={formData} /> :
       step === 4 ? <LogoDesign onHandleInputChange={(v) => onHandleInputChange('design', v)} formData={formData} /> :
       step === 6 ? <LogoIdea loading={loading} generatedLogo={generatedLogo} /> :
       null
      }

      {/* Navigation Buttons */}
      <div className='flex items-center justify-between mt-10'>
        {step > 1 && step < 6 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}> 
                <ArrowLeft/> Previous 
            </Button>
        )}
        
        {step < 4 && (
             <Button onClick={() => setStep(step + 1)}> 
                Continue <ArrowRight/> 
             </Button>
        )}

        {step === 4 && (
            <Button onClick={GenerateLogo}> 
                Generate Logo <ArrowRight/> 
            </Button>
        )}
      </div>
    </div>
  )
}

export default CreateLogo
