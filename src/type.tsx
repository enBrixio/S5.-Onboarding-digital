type Tutorial = {
  title: string;
  description: string;
  bgcolor: string;
  img: string;
};

type CardProps = {
  nextStep: () => void;
};
type TonClick = {
  TonClick: () => void;
};

export type { Tutorial, CardProps, TonClick };
