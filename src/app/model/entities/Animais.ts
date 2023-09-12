export class Animais{
    private _id!: string;
    private _especieAnimal: string;
    private _nomeAnimal: string;
    private _generoAnimal: number;
    private _pesoAnimal!: number;
    private _saudeAnimal!: number;

    constructor(especie:string,nome:string,genero:number){
        this._especieAnimal=especie;
        this._generoAnimal=genero;
        this._nomeAnimal=nome;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get especieAnimal(): string {
        return this._especieAnimal;
    }
    public set especieAnimal(value: string) {
        this._especieAnimal = value;
    }
    public get nomeAnimal(): string {
        return this._nomeAnimal;
    }
    public set nomeAnimal(value: string) {
        this._nomeAnimal = value;
    }
    public get generoAnimal(): number {
        return this._generoAnimal;
    }
    public set generoAnimal(value: number) {
        this._generoAnimal = value;
    }
    public get pesoAnimal(): number {
        return this._pesoAnimal;
    }
    public set pesoAnimal(value: number) {
        this._pesoAnimal = value;
    }
    public get saudeAnimal(): number {
        return this._saudeAnimal;
    }
    public set saudeAnimal(value: number) {
        this._saudeAnimal = value;
    }
}

