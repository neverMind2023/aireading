import { ArticleService } from './article.service';
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import type { Article, ArticleCreateInput } from '../types/index';
import { ResponseUnion } from '../utils/response/index'

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Get('query')
    async queryArticle(): ResponseUnion<Article[]> {
        return await this.articleService.query();
    }

    @Post('create')
    async createArticle(
        @Body() createInput: ArticleCreateInput): ResponseUnion<Article> {
        return await this.articleService.create(createInput);
    }

    @Get(':id')
    async queryByArticleId(@Param() params: any): ResponseUnion<Article> {
        return await this.articleService.queryByArticleId(parseInt(params.id));
    }

}