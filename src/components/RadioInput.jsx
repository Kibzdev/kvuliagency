import React from 'react'

const RadioInput = ({label, ...props}) => {
  return (
    <label className="flex gap-x-3">
      <input 
      type="radio"
      {...props}
      className="h-6 w-6 flex-none appearance-none rounded-full border border-casal-dark/20 outline-none checked:border-[0.5rem]
       checked:border-casal focus-visible::ring-1
       
       focus-visible:ring-casal-dark focus-visible:ring-offset-2" 
      />
      <span className="text-base/6 text-casal-dark">{label}</span>
    </label>
  )
}

export default RadioInput