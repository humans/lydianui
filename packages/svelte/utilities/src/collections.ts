type Object = {
	[key: string]: any;
};

export function reject<Item extends Object>(items: Item[], key: keyof Item, value: any): Item[] {
	return items.filter((item: any) => item[key] !== value);
}

export function fuzzy<Item extends Object>(
	items: Item[],
	key: keyof Item,
	keyword: string
): Item[] {
	return items.filter((item) => {
		return item[key].toLowerCase().includes(keyword.toLowerCase());
	});
}
