import Model from "./model";

class Utilisateur extends Model {
    constructor() {
        super();
    }

    static async all(): Promise<any[]> {
        return this.query("SELECT * FROM utilisateurs");
    }

    static async find(id: number): Promise<any> {
        return this.get("SELECT * FROM utilisateurs WHERE id = $1", [id]);
    }

    static async create(nom: string, prenom: string, email: string, mot_de_passe: string): Promise<void> {
        return this.run("INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe) VALUES ($1, $2, $3, $4)", [nom, prenom, email, mot_de_passe]);
    }

    static async update(id: number, nom: string, prenom: string, email: string, mot_de_passe: string): Promise<void> {
        return this.run("UPDATE utilisateurs SET nom = $1, prenom = $2, email = $3, mot_de_passe = $4 WHERE id = $5", [nom, prenom, email, mot_de_passe, id]);
    }

    static async delete(id: number): Promise<void> {
        return this.run("DELETE FROM utilisateurs WHERE id = $1", [id]);
    }

    static async findByEmail(email: string): Promise<any> {
        return this.get("SELECT * FROM utilisateurs WHERE email = $1", [email]);
    }

    static async findByEmailAndPassword(email: string, mot_de_passe: string): Promise<any> {
        return this.get("SELECT * FROM utilisateurs WHERE email = $1 AND mot_de_passe = $2", [email, mot_de_passe]);
    }


}

export default Utilisateur;