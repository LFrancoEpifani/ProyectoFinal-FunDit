import React from 'react'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'
import { EventProvider } from './eventContext'
import { useState } from 'react'
import PublicationModal from './components/PublicationModal/PublicationModal'


export default function Flyers() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
        <EventProvider>
          <NavBar/>
          <Card/>
          {isModalOpen && (
            <PublicationModal setIsModalOpen={() => setIsModalOpen(true)}/>
          )}
        </EventProvider>
    </div>
  )
}
