package com.example.uni_library.Product.Validators;

import com.example.uni_library.Exceptions.ErrorMessages;
import com.example.uni_library.Exceptions.ProductNotValidException;
import com.example.uni_library.Product.Model.Product;
import io.micrometer.common.util.StringUtils;

public class ProductValidator {
    private ProductValidator(){

    }

    public static void execute(Product product){
//        private static void validateProduct(Product product) {
//            if(StringUtils.isEmpty(product.getName())){
//                throw  new ProductNotValidException(ErrorMessages.NAME_REQUIRED.getMessage());
//            }
//
//            if(product.getDescription().length() < 20){
//                throw  new ProductNotValidException(ErrorMessages.DESCRIPTION_LENGTH.getMessage());
//            }
//
//            if(product.getPrice() == null || product.getPrice() < 0.00){
//                throw new ProductNotValidException(ErrorMessages.PRICE_CAN_NOT_BE_NEGATIVE.getMessage());
//
//            }
//        }
    }

}
