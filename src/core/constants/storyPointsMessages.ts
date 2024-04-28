import { StoryPointsMessages } from '@core/types/StoryPoints';

export const STORY_POINTS_MESSAGES: StoryPointsMessages = {
  mediumComplexity: {
    title: 'It seems quite complex.',
    description:
      'You might be able to solve it in a reasonable amount of time, but it may require some external help.',
    type: 'warning'
  },
  highComplexity: {
    title: 'Too much to chew!',
    description:
      'It is a quite challenging task and you might not be able to solve it in a reasonable amount of time. It is recommended to split it into more manageable parts.',
    type: 'error'
  },
  mediumUncertainty: {
    title: 'It seems quite unclear.',
    description:
      'You better look for clarification before proceeding on this task. Take some extra time to learn more about it and/or ask for help.',
    type: 'warning'
  },
  highUncertainty: {
    title: 'You are alone in the dark!',
    description:
      'This seems completely unclear to you. It is recommended to gather more information before considering this task.',
    type: 'error'
  },
  mediumEffort: {
    title: 'Not a trivial task.',
    description:
      'This task is not too difficult and you can proceed with it. However, it is safe to say that you might be able to solve it in a reasonable amount of time.',
    type: 'warning'
  },
  highEffort: {
    title: 'Is a sprint enough?',
    description:
      'This task is going to take an exceptional amount of time to solve. It is recommended to split it into more manageable parts.',
    type: 'error'
  },
  doNotProceed: {
    title: 'Do not proceed!',
    description:
      'This task does not seem ready to be worked on. You and your team should discuss this issue before proceeding.',
    type: 'error'
  },
  average: {
    title: 'Balanced as all things should be!',
    description:
      'This seems to be a task to be completed in a good amount of time. Neither to easy nor to hard.',
    type: 'success'
  },
  allClear: {
    title: 'All clear!',
    description:
      'This task seems to be a trivial one and you can proceed with it. Enjoy!',
    type: 'success'
  }
};
