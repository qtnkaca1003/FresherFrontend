import type { NextPage } from "next";
const About = ({ movies }: any) => {
  //console.log(movies);
  return (
    <>
      <h1>List movies</h1>
      {/* {movies.map((item: any) => {
        return (
          <div key={item.id}>
            <h2>{item.id}</h2>
          </div>
        );
      })} */}
    </>
  );
};

export default About;
/* export async function getServerSideProps() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const posts = res.json();
  console.log(posts);

  return {
    props: {
      movies: posts,
    },
  };
} */
