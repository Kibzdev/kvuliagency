import React, {useId } from 'react'

const TextInput = ({ label, ...props }) => {
   const id = useId()
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input 
      type="text"
      id={id}
      {...props}
      placeholder=""
      className="peer  block w-full border border-celeste bg transparent px-6 pb-4 pt-12 text-base/6 text-casal-dark ring-4 ring-transparent
      transition focus:border-casal-dark focus:outline-none focus:ring-casal-dark/5 group-first:-t-2xl group-last:rounded-b-2xl"
      />
      <label 
      htmlFor={id}
      className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-casal-light transition-all duration-200
    peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-casal-dark peer-[:not(:placeholder-shown)]
    :-translate-y-4 peer-[:not(placeholder-shown)]:scale-75 peer-[:not
    (:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]
    :text-casal-dark
    ">{label}</label>
    </div>
  )
}

export default TextInput