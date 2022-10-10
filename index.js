//IMPORTACION DE MODULO FS
import * as fs from 'fs';
//CLASE CONTENEDOR
class Contenedor{
    //CONSTRUCTOR
    constructor(archivo){
        this.archivo = archivo;
    }
    //METODOS PRIVADOS
    async #getFile(){
        try{
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const dataObj = JSON.parse(data);
            return dataObj;
        } catch(err){
            throw new Error(`Error en la lectura del archivo. ${err}`)
        }
    };

    //METODOS PUBLICOS
    async save(obj){
        try{
            const data = await this.#getFile();
            await fs.promises.writeFile(this.archivo, JSON.stringify([...data, {...obj, id: data[data.length - 1].id + 1}]), 'utf-8');
            return this.ultimoId;
        } catch(err){
            throw new Error(`Error al guardar el archivo. ${err}`);
        }
    }

    async getById(n){
        try{
            const data = await this.#getFile();
            const obj = data.find(e => e.id === n);
            if(obj){
                console.table(obj);
                return obj;
            }
            console.table(`No se encontró un producto con id ${n}`);
            return null;
        }catch(err){
            throw new Error(`Error al intentar obtener producto por ID. ${err}`);
        }
    }

    async getAll(){
        try {
            const data = await this.#getFile();
            console.table(data);
            return data;
        } catch (err) {
            throw new Error(`Error al intentar mostrar el archivo. ${err}`);
        }
    }

    async deleteById(n){
        try {
            const data = await this.#getFile();
            await fs.promises.writeFile(this.archivo, JSON.stringify(data.filter(e => e.id !== n)), 'utf-8');
        } catch (err) {
            throw new Error(`Error al intentar borrar un producto por ID, ${err}`);
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]), 'utf-8')
        } catch (err) {
            throw new Error(`Error al intentar eliminar el listado. ${err}`);
        }
    }
}
 //NUEVA INSTANCIA DE LA CLASE
const c = new Contenedor('./Productos.txt');
export default c; 