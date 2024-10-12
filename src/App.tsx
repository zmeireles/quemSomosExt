import React from 'react';
import QuemSomosExt from './components/QuemSomosExt';
import { IQuemSomos } from './models/database';

const App: React.FC = () => {
  const slides: IQuemSomos[] = [
    {
      id: '1',
      data: "Quem Somos",
      titulo: "Nossa História",
      texto: "Somos uma empresa inovadora dedicada a criar soluções tecnológicas que transformam vidas.",
      background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: '2',
      data: "Nossa Missão",
      titulo: "Inovação Constante",
      texto: "Buscamos constantemente novas formas de aplicar a tecnologia para resolver problemas complexos e melhorar a qualidade de vida das pessoas.",
      background: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: '3',
      data: "Nosso Futuro",
      titulo: "Expandindo Horizontes",
      texto: "Estamos comprometidos em expandir nossa presença global, trazendo soluções inovadoras para mercados emergentes e estabelecidos.",
      background: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  return (
    <div className="App">
      <QuemSomosExt blocks={slides} />
    </div>
  );
};

export default App;