import { Button, Container, Img, Paragraph, Title } from "./styles.js"
import { useState } from "react"

import Babuinos from './assets/babuinos.webp'
import Monkey1 from './assets/monkey1.webp'
import gatito from './assets/gatito.webp'
import vovozinho from './assets/vovozinho.jpg'
import babyMonkey from './assets/baby-monkey.jpg'

function App() {

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_7m_9vBbVqpkuEpWKSTPp6py-Lzb__UBcQ&s',
    Babuinos,
    Monkey1,
    gatito,
    vovozinho,
    babyMonkey
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  function putImage() {
    // Escolhe um índice aleatório do array
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }

  return (
      <Container>
        <Title>Image Generator</Title>
        <Img src={currentImage} alt="Meme-Image" />
        <Paragraph>Clique no botão para gerar uma nova imagem!</Paragraph>
        <Button onClick={()=> putImage()}>Clique Aqui!</Button>
      </Container>
  )
}

export default App
