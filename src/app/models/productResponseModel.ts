
import { Product } from "./product";
import { ResponseModel } from "./responseModel";

//bana apiden gelecek olan datayı karşılayacak model
export interface ProductResponseModel extends ResponseModel{
    data:Product[],
} //extend(inheritence) ile ResponseModel içindekileri de içeriyor. ResponseModel->base