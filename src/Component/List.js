import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Top from "./Top";
import Movie from "./Movie";

const apiKey = process.env.REACT_APP_API_KEY;

const List = (props) => {
  const { title, type } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [type]);

  console.log(movies);

  return (
    <>
      <ListDiv>
        {title}
        <WrapCont>
          {type === "top_rated"
            ? movies.map((s, index) => (
                <Top img={s.poster_path} index={index} key={index} />
              ))
            : movies.map((s, index) => (
                <Movie img={s.backdrop_path} key={index} />
              ))}
        </WrapCont>
      </ListDiv>
    </>
  );
};

export default List;

const ListDiv = styled.div`
  color: white;
  font-size: 1.3rem;
  padding: 1rem 3rem;
`;

const WrapCont = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;
