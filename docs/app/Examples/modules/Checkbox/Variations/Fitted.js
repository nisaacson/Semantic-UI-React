import React from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'

const CheckboxFittedExample = () => (
  <div>
    <Segment compact>
      <Checkbox />
    </Segment>
    <Segment compact>
      <Checkbox slider />
    </Segment>
    <Segment compact>
      <Checkbox toggle />
    </Segment>
  </div>
)

export default CheckboxFittedExample
