
class Category {
    name: string;
    initial: string;
    constructor(name:string)
    {
        this.name = name;
        this.initial = "";
        if (this.name.length > 1)
        {
            this.initial += this.name.charAt(0);
            this.initial += this.name.charAt(1);
        } else if (this.name.length < 3)
        {
            this.initial = this.name;
        }
    }
}

export default Category;