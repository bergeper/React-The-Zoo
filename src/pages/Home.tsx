import { Navbar } from '../components/Navbar/NavBar';

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className='container'>
        <section className='content'>
          <article className='hero'>
            <h1 className='hero__title'>The Zoo!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              ratione hic laborum minus assumenda labore molestias rerum dolores
              odio exercitationem suscipit, maxime aliquam veniam accusantium
              laudantium aut doloribus, eius rem.
            </p>
          </article>
          <article>
            <h3>Dagens djur!</h3>
          </article>
        </section>
      </main>
    </>
  );
};
