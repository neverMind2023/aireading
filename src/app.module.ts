import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleController } from './article/article.controller';
import { AppService } from './app.service';
import { ArticleService } from './article/article.service';
import PrismaModule from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, ArticleController],
  providers: [AppService, ArticleService],
})
export class AppModule {}
