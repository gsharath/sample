import { users } from "../../mock-data/users-list.ts";

  export function checkLoginService({branchId, userName, password}) {
    return users.find(p=>p.branchId === branchId && userName === p.userName && p.password === password);
  }