import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'


// containers
import Home from '../src/Containers/Home'

// components
import Button from '../src/Components/Button'
import Card from '../src/Components/Card'
import Filter from '../src/Components/Filter'

const mockPets = [
  { id: 1, name: 'Rex', specie: 'Poodle' ,image: 'http://www.premiuminsurance.us/wp-content/uploads/2018/07/Low-Cost-Pet-Insurance-Protection-For-Pennies-a-Day.jpeg', },
  { id: 2, name: 'Rex', specie: 'Poodle' ,image: 'http://www.premiuminsurance.us/wp-content/uploads/2018/07/Low-Cost-Pet-Insurance-Protection-For-Pennies-a-Day.jpeg', },
  { id: 3, name: 'Rex', specie: 'Poodle' ,image: 'http://www.premiuminsurance.us/wp-content/uploads/2018/07/Low-Cost-Pet-Insurance-Protection-For-Pennies-a-Day.jpeg', },
  { id: 4, name: 'Rex', specie: 'Poodle' ,image: 'http://www.premiuminsurance.us/wp-content/uploads/2018/07/Low-Cost-Pet-Insurance-Protection-For-Pennies-a-Day.jpeg', },
]

storiesOf('Components', module)
  .add('Button Default', () => 
    <Button>
      Button Default
    </Button>
  )
   .add('Button Danger', () => 
    <Button color='danger'>
      Button Danger
    </Button>
  )
  .add('Card Default', () => 
    <Card pet={mockPets[0]} />
  )
  .add('Filter Default', () => 
    <Filter />
  )


storiesOf('Containers', module)
  .add('Home', () => 
    <Home pets={mockPets} />
  )
  
