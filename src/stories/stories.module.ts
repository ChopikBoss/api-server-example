import { Module } from '@nestjs/common';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryEntity } from './story.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoryEntity])],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoriesModule {}
