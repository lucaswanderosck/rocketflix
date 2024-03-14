import React from 'react'
import { BeatLoader } from 'react-spinners'

export const Loader: React.FC = () => {
  return (
    <BeatLoader
      color="#284fab"
      loading={true}
      cssOverride={{
        marginTop: 24,
      }}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}
