import { STORY_POINTS_MESSAGES } from '@core/constants/storyPointsMessages';
import { StoryPointsValues } from '@core/constants/storyPointsValues';
import {
  FactorsValues,
  Message,
  MessageType,
  StoryPointsResult
} from '@core/types/StoryPoints';

export class StoryPoints {
  private readonly MEDIUM_LIMIT = 60;
  private readonly HIGH_LIMIT = 80;
  private readonly POINTS = {
    veryEasy: 30,
    easy: 90,
    regular: 120,
    fair: 150
  };

  private storyPoints: number;
  private message: Message;
  private factorsValues: FactorsValues;

  constructor({ complexity, uncertainty, effort }: FactorsValues) {
    this.storyPoints = 0;
    this.message = STORY_POINTS_MESSAGES.average;
    this.factorsValues = {
      complexity,
      uncertainty,
      effort
    };
  }

  private updateMessage(type: MessageType): void {
    this.message = STORY_POINTS_MESSAGES[type];
  }

  private isBetween({
    complexity,
    uncertainty,
    effort
  }: FactorsValues): boolean {
    if (complexity >= this.MEDIUM_LIMIT && complexity < this.HIGH_LIMIT) {
      this.updateMessage('mediumComplexity');
      return true;
    }

    if (uncertainty >= this.MEDIUM_LIMIT && uncertainty < this.HIGH_LIMIT) {
      this.updateMessage('mediumUncertainty');
      return true;
    }

    if (effort >= this.MEDIUM_LIMIT && effort < this.HIGH_LIMIT) {
      this.updateMessage('mediumEffort');
      return true;
    }

    return false;
  }

  private isHigh({ complexity, uncertainty, effort }: FactorsValues): boolean {
    if (complexity >= this.HIGH_LIMIT) {
      this.updateMessage('highComplexity');
      return true;
    }

    if (uncertainty >= this.HIGH_LIMIT) {
      this.updateMessage('highUncertainty');
      return true;
    }

    if (effort >= this.HIGH_LIMIT) {
      this.updateMessage('highEffort');
      return true;
    }

    return false;
  }

  private sumPoints({
    complexity,
    uncertainty,
    effort
  }: FactorsValues): number {
    return complexity + uncertainty + effort;
  }

  private calculateStoryPoints(): void {
    const { complexity, uncertainty, effort } = this.factorsValues;

    if (this.isHigh({ complexity, uncertainty, effort })) {
      this.storyPoints = StoryPointsValues.THIRTEEN;
      return;
    }

    if (this.isBetween({ complexity, uncertainty, effort })) {
      this.storyPoints = StoryPointsValues.EIGHT;
      return;
    }

    const sumPoints = this.sumPoints({ complexity, uncertainty, effort });

    if (sumPoints <= this.POINTS.veryEasy) {
      this.storyPoints = StoryPointsValues.ONE;
      this.updateMessage('allClear');
      return;
    }

    if (sumPoints <= this.POINTS.easy) {
      this.storyPoints = StoryPointsValues.TWO;
      this.updateMessage('allClear');
      return;
    }

    if (sumPoints <= this.POINTS.regular) {
      this.storyPoints = StoryPointsValues.THREE;
      this.updateMessage('average');
      return;
    }

    this.storyPoints = StoryPointsValues.FIVE;
    this.updateMessage('average');
  }

  public getResults(): StoryPointsResult {
    this.calculateStoryPoints();

    return {
      storyPoints: this.storyPoints,
      message: this.message
    };
  }
}
