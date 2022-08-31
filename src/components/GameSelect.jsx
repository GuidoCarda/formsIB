import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

function GameSelect() {
  let [plan, setPlan] = useState('startup')

  return (
    <RadioGroup className="content-center flex justify-around justify-items-center gap-4 accent-indigo-500" value={plan} onChange={setPlan}>
      <RadioGroup.Option value="valorant" className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-auto " >
          {({ checked }) => (
          <span className={`flex items-center h-full px-4 ${checked ? 'bg-blue-200' : ''}`}>Valorant</span>
          )}
      </RadioGroup.Option>
      <RadioGroup.Option  className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-auto " value="lol">
        {({ checked }) => (
          <span className={`flex items-center h-full px-4 ${checked ? 'bg-blue-200' : ''}`}>Lol</span>
        )}
      </RadioGroup.Option>
      
      <RadioGroup.Option  className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-auto " value="dota">
        {({ checked }) => (
            <span className={`flex items-center h-full px-4 ${checked ? 'bg-blue-200' : ''}`}>Dota</span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option  className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-auto "value="nfs">
        {({ checked }) => (
          <span className={`flex items-center h-full px-4 ${checked ? 'bg-blue-200' : ''}`}>NFS</span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-auto " value="ashe">
        {({ checked }) => (
          <span className={`flex items-center h-full px-4 ${checked ? 'bg-blue-200' : ''}`}>Ashe</span>

        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}

  
export default GameSelect;