export default interface BaseRepository<T> {
    save(entity: T): Promise<T>
    list(): Array<T>
    findById(id: string): Promise<T>
}
