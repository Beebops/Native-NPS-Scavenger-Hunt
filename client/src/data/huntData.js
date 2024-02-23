export default huntData = {
  id: userId,
  userId: 1,
  parkId: selectedPark,
  title: title,
  speciesList: [
    {
      id: 1,
      commonName: 'Big Horn Sheep',
      scientificName: 'Ovis canadensis',
      isFound: false,
    },
    {
      id: 2,
      commonName: 'Coyote',
      scientificName: 'Canis latrans',
      isFound: false,
    },
    {
      id: 3,
      commonName: 'Peregrine Falcon',
      scientificName: 'Falco peregrinus',
      isFound: false,
    },
    {
      id: 4,
      commonName: 'Gray Wolf',
      scientificName: 'Canis Lupus',
      isFound: false,
    },
  ],
  isComplete: false,
  dateStarted: new Date(),
  dateCompleted: null,
}
