
export function validateRequired(value: any) {
	const isBlank = !value || (value.length !== undefined && value.length === 0);
	
	return isBlank ? "This field it's mandatory" : '';
}

export function validateRegexp(value: string, regexp: RegExp) {
	return regexp.test(value) ? '' : 'Error regEx';
}
