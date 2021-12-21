'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoiZG15ZXJzYm9lbSIsImEiOiJja3hna3pyZjE0YXVrMm9wbTByanc4bm52In0.gg4EFJRwrcBXL-jKoqFZnQ',
  CSV: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToY5O6qI2TvSFjFKpyw9RRxZRllyt8mtU9T_GnpUvQDAwN1HK9QI2nQFxKaoFpNiG4WLip65IhYaHm/pub?gid=0&single=true&output=csv',
  center: [42.361145, -71.057083],
  zoom: 6,
  title: 'Vaccine Finder',
  description:
    'Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.',
  sideBarInfo: ['Site_Name', 'Address', 'Days_of_Operation'],
  popupInfo: ['Location_Name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Neighborhood ',
      columnHeader: 'Neighborhood',
      listItems: [
       'Boston',
       'Allston',
      ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
        'Disabled',
        'Homeless',
        'Immigrants/Refugees',
        'Low Income',
        'Seniors',
        'Youth: Pre-teen',
        'Youth: Teen',
      ],
    },
  ],
};
