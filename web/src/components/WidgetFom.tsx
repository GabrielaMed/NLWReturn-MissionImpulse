import { CloseButton } from "./CloseButton";

import bugImageUrl from '../imgs/bug.svg';
import ideaImageUrl from '../imgs/idea.svg';
import thoughtImageUrl from '../imgs/thought.svg';


//Object.entries(feedbacktype) retorna tudo isso aqui de baixo
const feedbackTypes = {
  BUG: {
    title:'Problema',
    image:{
      source:'bugImageUrl',
      alt:'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image:{
      source:'ideaImageUrl',
      alt:'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image:{
      source:'thoughtImageUrl',
      alt:'Imagem de balão de pensamento'
    }
  }
};

export function WidgetForm(){

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     <header>
      <span className="text-xl leading-6">Deixe seu feedback</span>

      <CloseButton/>
     </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return(
            <button 
              key={key} // talvez tenha que usar algo parecido no pi!!! stage 2 min 41:10
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col item-center gap-2 bprder-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              //onClick={}
              type="button"
            >
              <img src={value.image.source} alt="{value.image.alt}" />
              <span>{}value.title</span>
            </button>
          );
        })};
      </div>

      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  );
}