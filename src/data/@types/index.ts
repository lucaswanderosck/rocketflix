export type MovieId = {
  id: number
}

export type Genre = {
  name: string
}

export type MovieInfos = {
  title: string
  overview: string
  poster_path: string
  id: number
  vote_average: number
  release_date: string
  runtime: number
  tagline: string
  homepage: string
  genres: Genre[]
}
