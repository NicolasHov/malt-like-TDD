import {render, screen} from '@testing-library/react'
import FreelanceCard from './FreelanceCard'
import {freelances} from '../../fixture'

it('display all freelances', () => {
  render(<FreelanceCard  freelance={freelances[0]}/>);

  expect(screen.getByText('Antonio Ribeiro')).toBeInTheDocument();
  expect(screen.getByText('Développeur web')).toBeInTheDocument();
  expect(screen.getByText('Disponible')).toBeInTheDocument();
});

it('display "indispo" when freelance unavailable', () => {
  render(<FreelanceCard  freelance={freelances[1]}/>);

  expect(screen.getByText('Indisponible')).toBeInTheDocument();
});