export default interface IPost{
    id: number,
    title: string,
    content?: string,
    published: boolean,
    author?: string,
    authorId: number
}