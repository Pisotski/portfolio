// mock data that will come from database

const data = [
  {
    id: 1,
    name: 'iyx',
    imgUri: 'https://i.picsum.photos/id/581/500/300.jpg',
    bulletPoints: [
      'bullet point 1',
      'bullet point 2',
      'bullet point 3',
      'bullet point 4',
      'bullet point 5',
      'bullet point 6',
      'bullet point 7',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Maecenas scelerisque tempus dolor sed egestas. Vivamus sed porttitor lectus. Curabitur luctus lacinia rutrum. Duis elementum ultrices hendrerit. Vivamus eget placerat lectus, vitae pellentesque felis. Ut nec porta nulla. Donec nec arcu placerat, malesuada eros a, tincidunt purus. Nullam ultrices venenatis sapien vitae mattis.',
  },
  {
    id: 2,
    imgUri: 'https://i.picsum.photos/id/582/500/300.jpg',
    name: 'onvog',
    bulletPoints: [
      'bullet point 1',
      'bullet point 2',
      'bullet point 3',
    ],
    text: 'Lorem ipsum dolor sit amet. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Maecenas scelerisque tempus dolor sed egestas. Vivamus sed porttitor lectus. Curabitur luctus lacinia rutrum. Duis elementum ultrices hendrerit. Vivamus eget placerat lectus, vitae pellentesque felis. Ut nec porta nulla. Donec nec arcu placerat, malesuada eros a, tincidunt purus. Nullam ultrices venenatis sapien vitae mattis.',
  },
  {
    id: 3,
    imgUri: 'https://i.picsum.photos/id/583/500/300.jpg',
    name: 'i',
    bulletPoints: [
      'bullet point 1',
      'bullet point 2',
      'bullet point 3',
      'bullet point 4',
      'bullet point 5',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Maecenas scelerisque tempus dolor sed egestas. Vivamus sed porttitor lectus. Curabitur luctus lacinia rutrum. Duis elementum ultrices hendrerit. Vivamus eget placerat lectus, vitae pellentesque felis. Ut nec porta nulla. Donec nec arcu placerat, malesuada eros a, tincidunt purus. Nullam ultrices venenatis sapien vitae mattis.',
  },
  {
    id: 4,
    imgUri: 'https://i.picsum.photos/id/584/500/300.jpg',
    name: 'ievarum',
    bulletPoints: [
      'bullet point 1',
      'bullet point 2',
      'bullet point 3',
      'bullet point 4',
      'bullet point 5',
      'bullet point 6',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero. Integer ultricies, arcu quis blandit eleifend, velit lacus ullamcorper erat, vel egestas lectus tortor ut tellus. Morbi a ultricies nibh. Fusce accumsan condimentum consequat. Cras ipsum sem, accumsan quis sagittis nec, interdum maximus risus. In eu ligula sit amet tortor aliquam viverra in et nibh. Ut tristique ante id ante mattis, vitae mollis lectus hendrerit. Vestibulum rutrum ullamcorper massa sit amet ornare. Nullam suscipit vestibulum ultrices. Maecenas suscipit velit felis, ac pulvinar odio consequat in. Morbi id augue sit amet elit imperdiet eleifend a et massa. Etiam a quam egestas, laoreet nisi nec, elementum sem. Aenean aliquam rhoncus sapien a lacinia. Sed volutpat ullamcorper lacinia. Vestibulum varius enim nec felis fringilla, et hendrerit lectus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus quis purus vestibulum sollicitudin vel eget libero.',
  },
];

export default data;
