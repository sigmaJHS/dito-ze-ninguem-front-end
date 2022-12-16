import Container from 'react-bootstrap/Container'

import SlideCarousel from './../components/SlideCarousel'

function HomePage(){
  return(
    <Container className='wrapper-container' fluid="lg">
      <SlideCarousel />
    </Container>
  )
}

export default HomePage;