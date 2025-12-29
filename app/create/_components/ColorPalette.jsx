import React, { useState } from 'react'

function ColorPalette({ onHandleInputChange, formData }) {
  
  const [selectedOption, setSelectedOption] = useState(formData?.palette);

  const colors = [
    { name: "Palette 1", palette: ["#FF5733", "#33FF57", "#3357FF"] },
    { name: "Palette 2", palette: ["#F1C40F", "#E74C3C", "#8E44AD"] },
    { name: "Palette 3", palette: ["#1ABC9C", "#2ECC71", "#3498DB"] },
    { name: "Palette 4", palette: ["#34495E", "#16A085", "#27AE60"] },
    { name: "Palette 5", palette: ["#E67E22", "#D35400", "#F39C12"] },
  ];

  return (
    <div className='my-10'>
      <h2 className='text-primary text-3xl font-bold'>
        Choose your Color Palette
      </h2>
      <p className='text-gray-500 mt-2'>
        Select the colors that best represent your brand's personality.
      </p>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {colors.map((palette, index) => (
            <div 
                key={index} 
                className={`flex p-2 cursor-pointer ${selectedOption === palette.name && 'border-2 border-primary rounded-lg'}`}
                onClick={() => {
                    setSelectedOption(palette.name);
                    onHandleInputChange(palette.name);
                }}
            >
                {palette.palette.map((color, i) => (
                    <div 
                        key={i} 
                        className='h-24 w-full' 
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
        ))}
      </div>
    </div>
  )
}

export default ColorPalette
