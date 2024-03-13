import { Genre } from '../data/@types'

export const getMovieGenres = (genres: Genre[]): string => {
  return genres.map((genre) => genre.name).join(', ')
}

export const getMovieYear = (date: string): string => {
  return date.split('-')[0]
}

export const lowerOverview = (text: string): string => {
  if (text.length > 300) {
    return `${text.substring(0, 300)}...}`
  }
  return text
}

export const convertMinToHrs = (min: number): string => {
  const hours = Math.floor(min / 60)
  const minutes = min % 60
  return `${hours}h ${minutes}m`
}
