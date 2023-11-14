import { ValueObject } from "./ValueObject";
import { validateRequired } from "../utils/validations";

export interface IdProps {
	value: string;
}

export class Id extends ValueObject<IdProps> {
	private constructor(props: IdProps) {
		super(props);
	}
	
	get value(): string {
		return this.props.value;
	}

	public static generateId(): Id {
		return new Id({ value: crypto.randomUUID() });
	}
	
	public static createExisted(id: string) {
		const requiredError = validateRequired(id);
		
		if (requiredError.length > 0) {
			throw new Error(requiredError);
		} else {
			return new Id({ value: id });
		}
	}
}

