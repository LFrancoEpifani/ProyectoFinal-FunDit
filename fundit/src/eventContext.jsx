import React, { createContext, useState, useEffect } from 'react';
import { fetchEvents, addEvent } from './eventHelpers';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    urlImage: '',
    price: '',
    ubication: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    // Fetch events and handle any errors
    fetchEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        // Handle the error, e.g., show an error message to the user
      });
  }, []);

  const handleAddEvent = (newEvent) => {
    // Add an event and handle any errors
    addEvent(newEvent)
      .then(() => {
        setEvents([...events, newEvent]);
      })
      .catch((error) => {
        console.error('Error adding event:', error);
        // Handle the error, e.g., show an error message to the user
      });
  };

  return (
    <EventContext.Provider
      value={{ events, setEvents, formData, setFormData, handleAddEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};
