// Allows a language file to omit keys — missing branches simply won't type-error.
export type DeepPartial<T> = T extends string
	? string
	: T extends object
		? { [K in keyof T]?: DeepPartial<T[K]> }
		: T;

// Turns a nested object type into a union of dot-notation leaf paths, e.g.
// { home: { title: string } } -> "home.title"
export type Leaves<T, Prefix extends string = ""> = T extends string
	? Prefix
	: {
			[K in keyof T & string]: Leaves<T[K], `${Prefix}${Prefix extends "" ? "" : "."}${K}`>;
	  }[keyof T & string];