import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import type { Article, ArticleCreateInput } from '../types/index';
import { ResponseUnion, ResponseReject, ResponseResolve } from '../utils/response/index'

@Injectable()
export class ArticleService {
    constructor(private prisma: PrismaService) { }

    async query(): ResponseUnion<Article[]> {
        try{
            const res = await this.prisma.article.findMany();
            return new ResponseResolve(res);
        }catch(err){
            return new ResponseReject(null, `查询文章失败: ${err.message}`);
        }
    }

    async create(createInput: ArticleCreateInput): ResponseUnion<Article> { 
        try{
            const res = await this.prisma.article.create({
                data: createInput,
            });
            return new ResponseResolve(res, '创建文章成功');
        }
        catch(err){
            return new ResponseReject(null, `创建文章失败: ${err.message}`);
        }
    }

    async queryByArticleId(id: number): ResponseUnion<Article> {
        try{
            const res = await this.prisma.article.findUnique({
                where: {
                    id: id,
                },
            });
            return new ResponseResolve(res);
        }catch(err){
            return new ResponseReject(null, `查询文章失败: ${err.message}`);
        }
    }
}