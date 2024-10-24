import React , {memo} from 'react'

export default memo(function Child() {
  console.log("child is rendering")
  return (
    <div>
      child
    </div>
  )
}
)