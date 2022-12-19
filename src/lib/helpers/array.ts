export function remove<T>(array: T[], value: any): T[] {
	return array.filter(($value) => $value !== value);
}
