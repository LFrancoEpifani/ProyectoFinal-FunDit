export default {
  name: 'flyer',
  title: 'Flyer',
  type: 'document',
  fields: [
    // Tus campos existentes
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    },
    {
      name: 'schedule',
      title: 'Horario',
      type: 'string',
    },
  ],
};
