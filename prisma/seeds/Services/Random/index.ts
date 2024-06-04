
export default function random_id(array: Object[]){
    const array_length: number = array.length;
    const index = Math.floor(Math.random() * ( array_length ) );
    return  Object.values(array[index])[0];
} 
   


           


  