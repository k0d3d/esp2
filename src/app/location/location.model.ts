import { Author } from './author.model'
export class Location {
    public name: string
    public author: Author
    public longitude: number
    public latitude: number
    protected coords: any[]
    public category: string
    public entry_type: string
    public dateAdded: Date
    public tags: any[]
    public id: string
}

