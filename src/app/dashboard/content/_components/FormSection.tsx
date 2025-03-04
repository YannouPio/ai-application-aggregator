"use client"
import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface PROPS{
    selectedTemplate?:TEMPLATE;
}

function FormSection({ selectedTemplate }: PROPS) {
    
    const onSubmit = (e: any) => {
        e.preventDefault();
     }  
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
          <form className='mt-6' onSubmit={onSubmit}>
              {selectedTemplate?.form?.map((item,index)=>(
                  <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                      <label className='font-bold'>
                          {item.label}
                          {item.field == 'input' ? <Input /> :
                          item.field == 'textarea' ? <Textarea /> : null}
                      </label>
                  </div>
              ))}
              <Button type='submit' className='w-full py-6'>生成内容</Button>
          </form>
    </div>
  )
}

export default FormSection