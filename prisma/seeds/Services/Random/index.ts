
export default function random_id_category(array: Object[]){
    const count_categories: number = array.length ;
    const index = Math.floor(Math.random() * ( count_categories ) );
    return  Object.values(array[index])[0];
} 
   


           


  