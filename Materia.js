const conceitos = ['A', 'B', 'C'];
const materias =['Português' ,'Matemática','Ciências','Geografia','História','Inglês','Arte','Ed.Fisíca']

module.exports = class Materia {
    constructor(id, name, conceito){
        this.id= id;
        this.name= name;
        this.conceito = conceito;
    }
}