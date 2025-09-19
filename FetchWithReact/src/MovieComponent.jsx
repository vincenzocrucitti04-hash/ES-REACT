import React, { useState, useEffect } from "react";
import "./MovieComponent.css";

function MovieComponent() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://api.themoviedb.org/3/discover/movie";
  const apiToken = import.meta.env.VITE_API_TOKEN;

  // URL base per le immagini TMDb
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // w500 = larghezza 500px

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }

      const data = await response.json();
      const moviesArray = Array.isArray(data)
        ? data
        : data.results || data.movies || [];

      setMovies(moviesArray.slice(0, 20));
      setError(null);
    } catch (err) {
      console.error("Errore nel caricamento dei film:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Funzione per costruire l'URL completo dell'immagine
  const getImageUrl = (posterPath) => {
    if (!posterPath) return null;
    return `${IMAGE_BASE_URL}${posterPath}`;
  };

  if (loading) {
    return <div>Caricamento film...</div>;
  }

  if (error) {
    return <div>Errore: {error}</div>;
  }

  return (
    <>
      <div className="movie-container">
        <h1 className="movie-title">The best 20 movie films</h1>
        <button className="reload-button" onClick={fetchMovies}>
          Ricarica i films
        </button>
        <p className="movie-count">Film caricati: ({movies.length})</p>

        <div className="movies-grid">
          {movies.map((movie, index) => (
            <div key={movie.id || index} className="movie-card">
              {/* IMMAGINE DEL FILM */}
              {movie.poster_path ? (
                <img
                  className="movie-poster"
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title || "Poster del film"}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <div className="movie-placeholder">Nessuna immagine</div>
              )}

              <h3 className="movie-title-card">
                {movie.title || movie.name || "Titolo non disponibile"}
              </h3>
              <p className="movie-description">
                {movie.overview ||
                  movie.description ||
                  "Descrizione non disponibile"}
              </p>

              <hr className="movie-divider" />
            </div>
          ))}
        </div>

        {movies.length === 0 && (
          <p className="no-movies-message">Nessun Film trovato, mi spiace 😔</p>
        )}
      </div>
    </>
  );
}

export default MovieComponent;
