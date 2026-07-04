export class ValkeyError extends Error {
}

export class ParserError extends ValkeyError {
    buffer: string;
    offset: number;

    constructor(message: string, buffer: string, offset: number);
}

export class ReplyError extends ValkeyError {
    command?: string | undefined;
    args?: any[] | undefined;
    code?: string | undefined;

    constructor(message: string);
}

export class AbortError extends ValkeyError {
    command?: string | undefined;
    args?: any[] | undefined;
}

export class InterruptError extends ValkeyError {
    command?: string | undefined;
    args?: any[] | undefined;
    origin: Error;
}
