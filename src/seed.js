// replace 'c9JxU6fKHJcZXJ4BwyrHUcYgxCz1' with your firebase auth user id (can be taken from Firebase)

export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'c9JxU6fKHJcZXJ4BwyrHUcYgxCz1',
      username: 'alinaqikhan',
      fullName: 'Ali Naqi Khan',
      emailAddress: 'alinaqikhan@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'craigfederighi',
      fullName: 'Craig Federighi',
      emailAddress: 'craigfederighi@gmail.com',
      following: [],
      followers: ['c9JxU6fKHJcZXJ4BwyrHUcYgxCz1'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'pedroalonso',
      fullName: 'Pedro Alonso',
      emailAddress: 'pedroalonso@gmail.com',
      following: [],
      followers: ['c9JxU6fKHJcZXJ4BwyrHUcYgxCz1'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'tomcruise',
      fullName: 'Tom Cruise',
      emailAddress: 'tomcruise@gmail.com',
      following: [],
      followers: ['c9JxU6fKHJcZXJ4BwyrHUcYgxCz1'],
      dateCreated: Date.now()
    }
  ];


  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }


  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/craigfederighi/${i}.jpg`,
        caption: 'In nature, nothing is perfect and everything is perfect',
        likes: [],
        comments: [
          {
            displayName: 'pedroalonso',
            comment: 'Love this place!'
          },
          {
            displayName: 'tomcruise',
            comment: 'Gorgeous picture'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
