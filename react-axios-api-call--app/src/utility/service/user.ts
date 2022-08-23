import { IUser } from "../../models";
import { APIConstant } from "../constants";
import { BaseService } from "./base";

export class UserService {

  static getUser = async (): Promise<IUser[]> => {
    // Make a request for a user with a given ID
    const result = await BaseService.createInstance().get(APIConstant.users)
    return result.data;
  }

}