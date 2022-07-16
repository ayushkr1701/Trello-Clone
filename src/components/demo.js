const cards = [
  {
    id: 'card-1',
    title: 'HelpDesk Call AA999',
  },
  {
    id: 'card-2',
    title: 'Helpdesk Call BB999',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To Do',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Development',
      cards: [
        {
          id: 'card-1',
          title: 'Helpdesk Call CC999',
        },
        {
          id: 'card-2',
          title: 'Helpdesk Call DD999',
        },
      ],
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;
