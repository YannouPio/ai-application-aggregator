import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';

interface PROPS{
    selectedTemplate?:TEMPLATE;
}

function FormSection({ selectedTemplate}:PROPS) {
  return (
      <div className='p-5 shadow-md border rounded-lg'>
          <Image src={selectedTemplate?.icon}
                alt='icon' width={70} height={70} />
          <h2 className='font-bold text-2xl mb-2 text-primary'>
              {selectedTemplate?.name}
          </h2>
          <p className='text-sm text-gray-500'>
              {selectedTemplate?.desc}
          </p>
          <form>
              {selectedTemplate?.form?.map((item,index)=>(
                  <div key={index} className=''>
                      <label>
                          {item.label}
                      </label>
                  </div>
              ))}
          </form>
    </div>
  )
}

export default FormSection