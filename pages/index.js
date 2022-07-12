import Counter from '../components/Counter';

const counters = [
  { id: '1', title: 'Counter 1' },
  { id: '2', title: 'Counter 2' },
  { id: '3', title: 'Counter 3' },
  { id: '4', title: 'Counter 4' },
  { id: '5', title: 'Counter 5' },
];

function Home() {
  return (
    <>
      {counters.map(({ title, id }) => (
        <Counter counterTitle={title} key={id} />
      ))};
    </>
  );
}

export default Home;
