import { StoryPointsMessages } from '@/core/types/StoryPoints';

const STORY_POINTS_MESSAGES_FIXTURES: StoryPointsMessages = {
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

export const SCENARIOS = [
  {
    label: 'High Complexity',
    values: {
      complexity: 80,
      uncertainty: 0,
      effort: 0
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.highComplexity,
      storyPoints: 13
    }
  },
  {
    label: 'Medium Complexity',
    values: {
      complexity: 60,
      uncertainty: 0,
      effort: 0
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.mediumComplexity,
      storyPoints: 8
    }
  },
  {
    label: 'High Uncertainty',
    values: {
      complexity: 0,
      uncertainty: 80,
      effort: 0
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.highUncertainty,
      storyPoints: 13
    }
  },
  {
    label: 'Medium Uncertainty',
    values: {
      complexity: 0,
      uncertainty: 60,
      effort: 0
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.mediumUncertainty,
      storyPoints: 8
    }
  },
  {
    label: 'High Effort',
    values: {
      complexity: 0,
      uncertainty: 0,
      effort: 80
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.highEffort,
      storyPoints: 13
    }
  },
  {
    label: 'Medium Effort',
    values: {
      complexity: 0,
      uncertainty: 0,
      effort: 60
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.mediumEffort,
      storyPoints: 8
    }
  },
  {
    label: 'Reasonable Task',
    values: {
      complexity: 50,
      uncertainty: 50,
      effort: 50
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.average,
      storyPoints: 5
    }
  },
  {
    label: 'Average Task',
    values: {
      complexity: 40,
      uncertainty: 40,
      effort: 40
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.average,
      storyPoints: 3
    }
  },
  {
    label: 'Simple Task',
    values: {
      complexity: 30,
      uncertainty: 30,
      effort: 30
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.allClear,
      storyPoints: 2
    }
  },
  {
    label: 'Trivial Task',
    values: {
      complexity: 10,
      uncertainty: 10,
      effort: 10
    },
    expected: {
      message: STORY_POINTS_MESSAGES_FIXTURES.allClear,
      storyPoints: 1
    }
  }
];
