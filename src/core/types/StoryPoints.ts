export type FactorsValues = {
  complexity: number;
  uncertainty: number;
  effort: number;
};

export type Message = {
  title: string;
  description: string;
  type: 'success' | 'warning' | 'error';
};

export type StoryPointsMessages = {
  mediumComplexity: Message;
  highComplexity: Message;
  mediumUncertainty: Message;
  highUncertainty: Message;
  mediumEffort: Message;
  highEffort: Message;

  average: Message;
  allClear: Message;
};

export type MessageType = keyof StoryPointsMessages;

export type StoryPointsResult = {
  storyPoints: number;
  message: Message;
};
