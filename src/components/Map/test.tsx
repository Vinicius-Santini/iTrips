import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Campinas',
      slug: 'campinas',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Mônaco',
      slug: 'monaco',
      location: {
        latitude: 43,
        longitude: 7
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/mônaco/i)).toBeInTheDocument()
  })
})
