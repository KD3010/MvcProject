using Microsoft.AspNetCore.Mvc;
using MvcProject.Repository;
using PagedList;

namespace MvcProject.Controllers;

public class products : Controller
{
    // static int LIMIT = 6;
    private readonly ProductRepository _productRepository;
    private static int LIMIT = 9;
    public products() 
    {
        _productRepository = new ProductRepository();
    }
    public IPagedList<dynamic> Index(string? brand, string? category, int? minPrice, int? maxPrice, int page = 1)
    {
        var data = _productRepository.GetAllProducts(brand, category, minPrice, maxPrice);
        return data.ToPagedList(page, LIMIT);
    }
}
