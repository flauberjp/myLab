using Microsoft.AspNetCore.Mvc.DataAnnotations;
using Microsoft.AspNetCore.Mvc.DataAnnotations.Internal;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.Extensions.Localization;

namespace CustomValidationDemo.Validation
{
    public class YouTubeAttributeAdapter: AttributeAdapterBase 
    {
        public YouTubeAttributeAdapter(YouTubeAttribute attribute, 
            IStringLocalizer stringLocalizer) 
            : base(attribute, stringLocalizer)
        {
        }

        public override void AddValidation(ClientModelValidationContext context)
        {
            MergeAttribute(context.Attributes, "data-val", "true");
            MergeAttribute(context.Attributes, "data-val-youtube",
                GetErrorMessage(context));
        }

        public override string GetErrorMessage(ModelValidationContextBase validationContext)
        {
            return GetErrorMessage(validationContext.ModelMetadata,
             validationContext.ModelMetadata.GetDisplayName());
        }
    }
}
