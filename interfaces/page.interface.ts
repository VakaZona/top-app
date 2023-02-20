export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface TopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface HhData {
	_id: string;
	count: number;
	juniorSalary: number;
	seniorSalary: number;
	middleSalary: number;
	updatedAt: Date;
}

export interface TopPageModel {
	tags: string[];
    _id: string;
	secondaryCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages: TopPageAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	hh: HhData;
}