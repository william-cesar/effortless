export type FactorInfo = {
  title: string;
  subtitle: string;
  info: string;
  lowerEndLabel: string;
  upperEndLabel: string;
  hasPrev?: boolean;
  hasNext?: boolean;
  currentValue?: number;
};

export type FactorsList = {
  [key: number]: FactorInfo;
};

export type Factors = 'complexity' | 'uncertainty' | 'effort';
