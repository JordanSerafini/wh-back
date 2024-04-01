import Model from "./model";

class Poi extends Model {
    constructor() {
        super();
    }

    static async all(): Promise<any[]> {
        return this.query("SELECT * FROM poi");
    }

    static async find(id: number): Promise<any> {
        return this.get("SELECT * FROM poi WHERE id = $1", [id]);
    }

    static async create(nom: string, description: string, latitude: number, longitude: number, image: string): Promise<void> {
        return this.run("INSERT INTO poi (nom, description, latitude, longitude, image) VALUES ($1, $2, $3, $4, $5)", [nom, description, latitude, longitude, image]);
    }

    static async update(id: number, nom: string, description: string, latitude: number, longitude: number, image: string): Promise<void> {
        return this.run("UPDATE poi SET nom = $1, description = $2, latitude = $3, longitude = $4, image = $5 WHERE id = $6", [nom, description, latitude, longitude, image, id]);
    }

    static async delete(id: number): Promise<void> {
        return this.run("DELETE FROM poi WHERE id = $1", [id]);
    }

    static async findByNom(nom: string): Promise<any> {
        return this.get("SELECT * FROM poi WHERE nom = $1", [nom]);
    }

    static async findByOwner(owner: string): Promise<any> {
        return this.get("SELECT * FROM poi WHERE owner = $1", [owner]);
    }
    
}

export default Poi;