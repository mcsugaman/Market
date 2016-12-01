export class Hero {
    constructor(
        public id: number,
        public name: string,
        public isSecret: boolean,
        public power: string,
        public alterEgo?: string
        
    ) { }
}