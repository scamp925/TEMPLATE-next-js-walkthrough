import Counter from '../components/Counter';

const counters = [
  { title: 'Counter 1' },
  { title: 'Counter 2' },
  { title: 'Counter 3' },
  { title: 'Counter 4' },
  { title: 'Counter 5' },
];

function Home() {
  return (
    <>
      {counters.map(({ title }) => (
        <Counter counterTitle={title} />
      ))};
    </>
  );
}

export default Home;
