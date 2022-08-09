import { users } from "../../mock-data/users-list.ts";


  export function getAllUsers() {
    return users.map((p, i)=>{
      return {
        id: i,
        branchId: p.branchId ,
        userName: p.userName,
        name: `${p.firstName} ${p.middleName?.length > 0 ? p.middleName[0] : ''} ${p.lastName}`,
        position: p.position ,
      }
    });
  }