package com.electroapp.electro_app.infrastructure.utils.validations;

import org.springframework.beans.factory.annotation.Autowired;

import com.electroapp.electro_app.application.services.ICountryService;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ExistsByCountryNameValidation implements ConstraintValidator<ExistsByCountryName, String> {

    @Autowired
    private ICountryService service;

    @Override
    public boolean isValid(String countryname, ConstraintValidatorContext context) {
        // TODO Auto-generated method stub
        if(service == null)
        {return true;
        }
        return !service.existsByCountryname(countryname);
    }

    

}
