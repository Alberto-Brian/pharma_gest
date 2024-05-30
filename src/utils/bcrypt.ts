import bcrypt  from 'bcrypt';

export function hashPassword(password: string): string {
  try{
      return bcrypt.hashSync(password, 10);
  }catch(e: any){
    throw new Error(e);
  }
} 

 
export function comparePassword(password: string, user: string): boolean {
  try{
      return bcrypt.compareSync(password, user);
  }catch(e: any){
    throw new Error(e);
  }
} 