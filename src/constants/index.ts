import bugImages from '../assets/bug.svg';
import ideaImages from '../assets/idea.svg';
import otherImages from '../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImages,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImages,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImages,
      alt: 'Imagem de um balão',
    },
  },
};
