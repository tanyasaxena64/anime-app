import React from 'react'

export default function AnimeCard(anime) {
    console.log('11', anime)
  return (
    <article className="anime-card">
        <a href={anime.url} target="_blank" rel="noreferrer">
            <figure>
                <img src={anime.anime.image_url} alt="Anime"/>
            </figure>
            <h3>{anime.title}</h3>
        </a>
    </article>
  )
}
