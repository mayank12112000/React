import React from 'react'
import { memo } from 'react'
import { useState } from 'react'

function Child({}) {
   console.log("child component rendering")
  return (
    <div>
      child component
    </div>
  )
}
export default memo(Child)