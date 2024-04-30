export type FactorsValues = {
  complexity: number;
  uncertainty: number;
  effort: number;
};

export type MessageTypeValue = 'success' | 'warning' | 'error';

export type Message = {
  title: string;
  description: string;
  type: MessageTypeValue;
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
