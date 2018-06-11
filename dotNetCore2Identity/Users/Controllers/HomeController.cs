using System.Collections.Generic;

namespace mynamespace {
    public class HomeController : Controller {
        public ViewResult Index() =>
            View(new Dictionary<string, object> {
                ["Placeholder"] = "Placeholder"
            });
    }
}