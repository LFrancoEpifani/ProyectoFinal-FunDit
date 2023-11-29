export const fetchEvents = () => {
    return fetch("http://localhost:4000/events")
      .then((response) => response.json());
  };
  
  export const deleteEvent = (id, setEvents) => {
    return fetch(`http://localhost:4000/events/${id}`, {
      method: 'DELETE',
    })
      .then(() => setEvents(prevEvents => prevEvents.filter(event => event.id !== id)))
      .catch((error) => console.error('Error deleting event:', error));
  };
  
  
  export const addEvent = (formData, setEvents, setFormData) => {
    return fetch(`http://localhost:4000/events/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newEvent => {
        setEvents(prevEvents => [...prevEvents, newEvent]);
        setFormData({
          title: '',
          description: '',
          category: '',
          urlImage: '',
          price: '',
          ubication: '',
          date: '',
          time: ''
        });
      })
      .catch((error) => console.error('Error adding event:', error));
  };