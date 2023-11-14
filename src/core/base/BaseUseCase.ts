export interface BaseUseCase<T> {
    execute(entity?: T): Promise<Array<T>> | Promise<T> | void
}
