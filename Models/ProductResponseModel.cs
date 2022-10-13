using PagedList;

namespace MvcProject.Models;

public class ProductResponse {
    public int total {get; set;}
    public IPagedList<ProductModel> products {get; set;}
}