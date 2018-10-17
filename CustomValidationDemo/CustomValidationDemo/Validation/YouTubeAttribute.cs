using System;
using System.ComponentModel.DataAnnotations;

namespace CustomValidationDemo.Validation
{
    public class YouTubeAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            return ValidationResult.Success;
        }                
    }
}
