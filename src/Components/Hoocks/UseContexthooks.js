import React, { useContext } from 'react'
import { OwnerContext, ChannelContext} from '../../App'

function UseContexthooks() {

    const owner = useContext(OwnerContext)
    const channel = useContext(ChannelContext)


  return (
    <div>
        <h1>
      {owner} - {channel}
      </h1>
    </div>
  )
}

export default UseContexthooks
