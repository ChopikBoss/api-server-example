import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStoryDto, UpdateStoryDto } from './story.dto';
import { StoryEntity } from './story.entity';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private readonly stories_service: StoriesService) {}

  @Get()
  getList(): Promise<StoryEntity[]> {
    return this.stories_service.getStories();
  }

  @Get('/:id')
  getStoryById(@Param('id') id: string): Promise<StoryEntity> {
    return this.stories_service.getStoryById(parseInt(id));
  }

  @UsePipes(ValidationPipe)
  @Post()
  addNewStory(@Body() body: CreateStoryDto): Promise<StoryEntity> {
    return this.stories_service.createNewStory(body);
  }

  @UsePipes(ValidationPipe)
  @Patch(`/:id`)
  changeExistsStory(
    @Body() body: UpdateStoryDto,
    @Param('id') id: string,
  ): Promise<StoryEntity> {
    return this.stories_service.changeStoryById(parseInt(id), body);
  }
}
