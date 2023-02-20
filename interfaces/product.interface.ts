export interface ProductCharacteristic {
	value: string;
	name: string;
}

export interface ReviwModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface ProductModel {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	description: string;
	characteristics: ProductCharacteristic[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	image: string;
	initalRating: number;
	reviews: ReviwModel[];
	reviewCount: number;
	reviewAvg?: number;
	advantages:string;
}