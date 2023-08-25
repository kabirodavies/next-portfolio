import Link from 'next/link'
import React from 'react'
import { HiArrowCircleUp } from 'react-icons/hi'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-center font-bold px-10 py-5 mb-10 text-center">
        <div>
            <h1 className="text-5xl">Data<span className="text-teal-500"> Blog</span>
            </h1>
            <h2 className="mt-5 md:mt-2">Data science | Data Engineering | Cloud </h2>
        </div>
    </div>
  )
}

export default Banner



