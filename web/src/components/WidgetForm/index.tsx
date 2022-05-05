import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from '../../imgs/bug.svg';
import ideaImageUrl from '../../imgs/idea.svg';
import thoughtImageUrl from '../../imgs/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


//Object.entries(feedbacktype) retorna tudo isso aqui de baixo
export const feedbackTypes = {
  BUG: {
    title:'Problema',
    image:{
      source: bugImageUrl,
      alt:'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image:{
      source: ideaImageUrl,
      alt:'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image:{
      source: thoughtImageUrl,
      alt:'Imagem de balão de pensamento'
    }
  }
};


export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null) //aguarda a opção de feedback que o usuário escolheu
  const[feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ?(
        <FeedbackSuccessStep
        onFeedbackRestartRequested={handleRestartFeedback}
        />
      ): ( //senão
        <>
        {! feedbackType ?(
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ) :(
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        onFeedbackSent={() => setFeedbackSent(true)}
        />
      )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  );
}