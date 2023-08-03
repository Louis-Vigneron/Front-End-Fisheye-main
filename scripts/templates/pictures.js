export class Picture {
    constructor(data, firstName) {
        const { id, photographerId, title, image, likes, price, date } = data;
        this.Title = title
        this.Id = id
        this.PhotographerId = photographerId
        this.Image = image
        this.Likes = likes
        this.Price = price
        this.Date = date
        this.FirstName = firstName
    }
}
