export const mockData = {
    contacts: [
      { id: 'c1', name: 'Cat Whiskers', avatar: '/cat-avatar.jpg' },
      { id: 'c2', name: 'Lemon Zest', avatar: '/lemon-avatar.jpg' },
      { id: 'c3', name: 'Bouncy Bunny', avatar: '/cat-avatar.jpg' },
      { id: 'c4', name: 'Starry Panda', avatar: '/lemon-avatar.jpg' },
      { id: 'c5', name: 'Giggly Grape', avatar: '/cat-avatar.jpg' },
    ],
    groups: [
      { id: 'g1', name: 'Party Pals', members: ['c1', 'c2', 'c3'] },
      { id: 'g2', name: 'Adventure Squad', members: ['c3', 'c4', 'c5'] },
    ],
    messages: {
      c1: [
        { sender: 'Cat Whiskers', content: 'Hey! Ready for some fun?', type: 'text' },
        { sender: 'You', content: 'Always!', type: 'text' },
        { sender: 'Cat Whiskers', content: 'https://via.placeholder.com/150', type: 'image' },
      ],
      c2: [
        { sender: 'Lemon Zest', content: 'Got any plans?', type: 'text' },
        { sender: 'You', content: 'Just chilling!', type: 'text' },
      ],
      c3: [
        { sender: 'Bouncy Bunny', content: 'Bounce bounce!', type: 'text' },
        { sender: 'You', content: 'Haha, so energetic!', type: 'text' },
      ],
      c4: [
        { sender: 'Starry Panda', content: 'Look at the stars!', type: 'text' },
        { sender: 'You', content: 'So pretty!', type: 'text' },
        { sender: 'Starry Panda', content: 'https://via.placeholder.com/200', type: 'image' },
      ],
      c5: [
        { sender: 'Giggly Grape', content: 'Hehe, guess what?', type: 'text' },
        { sender: 'You', content: 'What?!', type: 'text' },
      ],
      g1: [
        { sender: 'Cat Whiskers', content: 'Party time!', type: 'text' },
        { sender: 'Lemon Zest', content: 'Woo!', type: 'text' },
        { sender: 'You', content: 'Let’s dance!', type: 'text' },
        { sender: 'Lemon Zest', content: 'https://via.placeholder.com/250', type: 'image' },
      ],
      g2: [
        { sender: 'Starry Panda', content: 'Adventure awaits!', type: 'text' },
        { sender: 'Bouncy Bunny', content: 'I’m in!', type: 'text' },
        { sender: 'You', content: 'Let’s go!', type: 'text' },
      ],
    },
  };