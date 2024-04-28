import { Link } from '../components/Link';

const i18n = {
  es: {
    title: 'Sobre mi',
    button: 'Ir al inicio',
    description:
      'Hola soy Efren y estoy llevando el curso de React de Midudev, siguelo en Youtube!',
  },
  en: {
    title: 'About me',
    button: 'Go to Home',
    description:
      "'Hi I'm Efren and I'm learning React from Midudev Course, follow him on Youtube!",
  },
};

const useI18n = (lang) => i18n[lang] || i18n.en;

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es');

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
