export type StepInfo = {
  title: string;
  subtitle: string;
  info: string;
  lowerEndLabel: string;
  upperEndLabel: string;
  hasPrev?: boolean;
  hasNext?: boolean;
  currentValue?: number;
};

export type Steps = {
  [key: number]: StepInfo;
};

export type StepEvent = 'next' | 'prev';
