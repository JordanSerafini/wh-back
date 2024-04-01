import Model from "./model";

class veveeventPoi extends Model {
    constructor() {
        super();
    }

    static async all(): Promise<any[]> {
        return this.query("SELECT * FROM veveevent");
    }

    static async find(id: number): Promise<any> {
        return this.get("SELECT * FROM veveevent WHERE id = $1", [id]);
    }

    static async create(name: string, description: string, lat: number, lng: number, image: string): Promise<void> {
        return this.run("INSERT INTO veveevent (name, description, lat, lng, url) VALUES ($1, $2, $3, $4, $5)", [name, description, lat, lng, image]);
    }

    static async update(id: number, name: string, description: string, lat: number, lng: number, image: string): Promise<void> {
        return this.run("UPDATE veveevent SET name = $1, description = $2, lat = $3, lng = $4, image = $5 WHERE id = $6", [name, description, lat, lng, image, id]);
    }

    static async delete(id: number): Promise<void> {
        return this.run("DELETE FROM veveevent WHERE id = $1", [id]);
    }

    static async findByName(name: string): Promise<any> {
        return this.get("SELECT * FROM veveevent WHERE name = $1", [name]);
    }

    static async findByOwner(owner: string): Promise<any> {
        return this.get("SELECT * FROM veveevent WHERE owner = $1", [owner]);
    }

    static async findByRate(rate: number): Promise<any> {
        return this.get("SELECT * FROM veveevent WHERE rate = $1", [rate]);
    }

    static async setImg(id: number, image: any, name: string): Promise<void> {
        return this.run("UPDATE veveevent SET url = $1, name = $2 WHERE id = $3", [image, name, id]);
    }

    
}

export default veveeventPoi;

