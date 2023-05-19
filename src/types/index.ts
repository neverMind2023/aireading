import type { Prisma } from '@prisma/client';

export type { Article, Tag, Category } from '@prisma/client';
export type ArticleCreateInput = Prisma.ArticleCreateInput;
export type ArticleUpdateInput = Prisma.ArticleUpdateInput & Prisma.ArticleWhereUniqueInput;

