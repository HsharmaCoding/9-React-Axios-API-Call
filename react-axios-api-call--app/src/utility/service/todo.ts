import { ITodo } from "../../models";
import { APIConstant } from "../constants";
import { BaseService } from "./base";

export class TodoService {

    static get = async (): Promise<ITodo[]> => {
        const result = await BaseService.createInstance().get(APIConstant.todos)
        return result.data;
    }

}