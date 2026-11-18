import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Card 
      title= "Laptop"
      description= "Gaming Laptop"
      price= "50K"
      />
      <Card
      title= "Samsung"
      description= "Budget phone"
      price= "30K"
      />
      <Card
      title= "iPhone"
      description= "best phone"
      price= "20K"
      />
    </div>
  )
}

export default App