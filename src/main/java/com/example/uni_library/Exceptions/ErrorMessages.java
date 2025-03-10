package com.example.uni_library.Exceptions;

public enum ErrorMessages {
    PRODUCT_NOT_FOUND("Product Not Found!"),
    NAME_REQUIRED("Name Is Required!"),
    DESCRIPTION_LENGTH("Description Must Be At Least 20 Characters!"),
    PRICE_CAN_NOT_BE_NEGATIVE("Price Can Not Be Negative!");
    private final String message;

    ErrorMessages(String message){
        this.message = message;
    }

    public String getMessage(){
        return message;
    }
}
