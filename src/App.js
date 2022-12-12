import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper';





function App() {
  const [look, setLook] = useState()
  const [movie, setMovie] = useState([])

  const changeText = (event) => {
    setLook(event.target.value)
  }

  const getMovie = (e) => {
    e.preventDefault();

    axios.get(`http://www.omdbapi.com/?s=${look}&apikey=150b6ab6`)
      .then((response) => {
        //console.log(response);
        setMovie(response.data.Search)
      })

  }

  return <>

    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container container-fluid">
        <a class="navbar-brand" href="#">MyMovieApp</a>
      </div>
    </nav>
    <div class="banner-image">
      <img src={'./cinema.jpg'} alt="" />
      <div class="container">
        <div class="movie__content">
          <h2>Watch <br></br>Sometning<br></br>Incredible.</h2>
        </div>
        <div class="search section__top">
          <p>Search</p>
          <form class="form-inline my-2 my-lg-0" onSubmit={getMovie}>
            <input class="form-control mr-sm-2" type="search" value={look} onChange={changeText} placeholder='Type the name of the moive & hit the enter button' title='Search for any movie' />
          </form>
        </div>

        <div class="movieResult section__top">
          {
            movie.map((value, index) => {
              return (
                <div class="moviCard">
                  <img src={value.Poster} class="moviePoster" alt='' />
                  <div class="movieDetails">
                    <h3 class="movieTiltle">{value.Title}</h3>
                    <h3 class="movieYear">{value.Year}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div class="movie__categories__fetch">
          <h3>Movie Category</h3>
          <div class="movie__row py-4 px-0">
            <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              class="mySwiper"
              slidePerView={6}
              spaceBetween={0}
            >
              <SwiperSlide>
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

        <div class="movie__categories__fetch section__top">
          <h3>Movie Category</h3>
          <div class="movie__row py-4 px-0">
            <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              class="mySwiper"
              slidePerView={6}
              spaceBetween={0}
            >
              <SwiperSlide>
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="Movie__Box">
                  <h4>Movie Name</h4>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>


  </>;
};

export default App